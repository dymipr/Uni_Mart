const { expect } = require("chai");
require("dotenv").config();

const { API_URL } = process.env;
// Import Web3.js library
const Web3 = require("web3").default;
// Set up Web3 provider
const web3 = new Web3(API_URL);

const fs = require("fs");
const { send } = require("process");

const tokenABI = JSON.parse(
  fs.readFileSync("./artifacts/contracts/NyxCipher.sol/NyxCipher.json", "utf8")
).abi;

const poolManagerABI = JSON.parse(
  fs.readFileSync(
    "./artifacts/contracts/PoolManager.sol/PoolManager.json",
    "utf8"
  )
).abi;

const stakingPoolABI = JSON.parse(
  fs.readFileSync(
    "./artifacts/contracts/StakingPool.sol/StakingPool.json",
    "utf8"
  )
).abi;

const tokenAddress = "0x72A009348c3f92E08e9e037069dBf00A6c2dd97c";
const poolManagerAddress = "0xc933B2fd69843991643eA898E2c30c97A431049d";
const stackingPoolAddress = "0x3783589849b30B7528331ed4C3aB446972a839c9";
const marketing_wallet = "0x090636F0E561C59734c91DaB7F0A4E87859d0bb4";
const stacking_wallet = "0x9Fc247f75606FcD24151E581b073b07FCD4b3D54";
const development_wallet = "0x7762380BceAB41c56F33943b1ea9209B7218BDd8";
const externalBuyback_wallet = "0xD3D4A73Eadb285833FB94b3ca4c1a1207E6F0b07";
const staking_pool_contract = "0x3783589849b30B7528331ed4C3aB446972a839c9";
const token_staking_pool_contract = "0x6d7e4b2ed0C2903E476641b21755E2CB318CE79B";
const test_wallet_address = "0x8Db2Ec88263267d025dED29Db1049D13B9D221b7";
const test_wallet_private_key = "0xcab925620e908cb5a71a25a75c5c9e9fdf94171f90eb6abb3919b7666c9030dc";

const owner_address = "0x52F42da37315f7Ed489F86b0F748a9dCc17B0422";
const owner_private_key = "0x4be7468253d5f06036c5805c3087314a5e9b3e9521d60c7ff48563255ff1e9aa";

let tax_wallets = [
  marketing_wallet,
  stacking_wallet,
  development_wallet,
  externalBuyback_wallet,
];

const nyx_cipher = new web3.eth.Contract(tokenABI, tokenAddress);
const staking_pool = new web3.eth.Contract(stakingPoolABI, stackingPoolAddress);
const pool_manager = new web3.eth.Contract(poolManagerABI, poolManagerAddress);

const owner = web3.eth.accounts.privateKeyToAccount(owner_private_key);
web3.eth.accounts.wallet.add(owner);

const test_wallet = web3.eth.accounts.privateKeyToAccount(test_wallet_private_key);
web3.eth.accounts.wallet.add(test_wallet);

describe("Should test setting the wallets, transfer the tokens, staking for 14 days and claim rewards", function () {
  
  it("Should set the wallets", async function () {

    await nyx_cipher.methods
      .setWallets(
        marketing_wallet,
        stacking_wallet,
        development_wallet,
        externalBuyback_wallet
      )
      .send({ from: owner });

    const taxWallets = await nyx_cipher.methods
      ._taxWallets()
      .send({ from: owner });
    expect(taxWallets[0]).to.equal(marketing_wallet);
    expect(taxWallets[1]).to.equal(development_wallet);
    expect(taxWallets[2]).to.equal(externalBuyback_wallet);
    expect(taxWallets[3]).to.equal(stacking_wallet);
  });

  it("Should transfer the tokens", async function () {
    const amount = hre.ethers.parseUnits("100000", 8);
    let amounts = [];
    for (let i = 0; i < 7; i++) {
      amounts.push(100000);
    }

    await nyx_cipher.methods
      .multiSendTokens(
        [
          ...tax_wallets,
          ...[staking_pool_contract, token_staking_pool_contract, test_wallet.address],
        ],
        amounts
      )
      .send({ from: owner });

    // Check tax wallets balance
    for (const tax_wallet of tax_wallets) {
      // await nyx_cipher.transfer(tax_wallet, amount);
      expect(await nyx_cipher.balanceOf(tax_wallet))
        .to.equal(amount);
    }

    expect(await nyx_cipher.balanceOf(staking_pool_contract))
      .to.equal(amount);
    expect(await nyx_cipher.balanceOf(token_staking_pool_contract))
      .to.equal(amount);
    expect(await nyx_cipher.balanceOf(test_wallet))
      .to.equal(amount);
  });
  it("Should stake the tokens", async function () {
    await nyx_cipher.methods.enableTrading().send({ from: owner });
    const amount = hre.ethers.parseUnits("1000", 8);
    await nyx_cipher.methods
      .approve(staking_pool_contract, amount)
      .send({ from: test_wallet });
    await staking_pool.methods.stake(amount).send({ from: test_wallet });
    const remainedAmount = hre.ethers.parseUnits("99000", 8);
    expect(await nyx_cipher.balanceOf(test_wallet.address)).to.equal(
      remainedAmount
    );
  });
  it("Should set the locktime 14 days  to 1min & get the rewards", async function () {
    await pool_manager.methods.setLockPeriods([60, 60, 60]).send({ from: owner });
    const amount = hre.ethers.parseUnits("1000", 8);
    await staking_pool.methods.unstake(amount).send({ from: test_wallet });
    await staking_pool.methods
      .claimReward(true, amount)
      .send({ from: test_wallet });
    console.log(
      "Unstaked in test wallet1: ",
      await nyx_cipher.balanceOf(test_wallet)
    );
  });
});
