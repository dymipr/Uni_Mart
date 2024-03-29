import React, { useState, useEffect } from 'react'
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import "./button.css";

const apiKey = '1730eff0-9d50-4382-a3fe-89f0d34a2070'
const injected = injectedModule()
const infuraKey = '<INFURA_KEY>'
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

init({
  apiKey,
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl
    },
    {
      id: 42161,
      token: 'ARB-ETH',
      label: 'Arbitrum One',
      rpcUrl: 'https://rpc.ankr.com/arbitrum'
    },
    {
      id: '0xa4ba',
      token: 'ARB',
      label: 'Arbitrum Nova',
      rpcUrl: 'https://nova.arbitrum.io/rpc'
    },
    {
      id: '0x2105',
      token: 'ETH',
      label: 'Base',
      rpcUrl: 'https://mainnet.base.org'
    }
  ]
})

function Connect() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [connectedAddresses, setConnectedAddresses] = useState([]);

  useEffect(() => {
    if (wallet && wallet.accounts.length > 0) {
      setConnectedAddresses(wallet.accounts.map(account => account.address));
    } else {
      setConnectedAddresses([]);
    }

    const handleAccountChange = (newAccounts) => {
      setConnectedAddresses(newAccounts);
    };

    if (wallet) {
      wallet.provider.on("accountsChanged", handleAccountChange);
    }

    return () => {
      if (wallet) {
        wallet.provider.off("accountsChanged", handleAccountChange);
      }
    };
  }, [wallet]);

  const handleDisconnect = async () => {
    if (wallet) {
      await disconnect(wallet);
    }
  };

  return (
    <div className='flex gap-5'>
        {connectedAddresses[0] > 0 && (
      <div className='hidden lg:block'>
          <div className='h-[43.5px] flex gap-5'>
                <div className='flex gap-3'>
                  <svg className='my-auto' width="67" height="38" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M26.773 13.159L28.6455 15.4991L21.0001 22.3401L13.3547 15.4991L15.2272 13.159L2.61133 1.45752L20.0653 12.3186L18.1214 15.0191L21.0001 16.7896L23.8788 15.0191L21.9349 12.3186L39.3889 1.45752L26.773 13.159Z"
                        fill="url(#paint0_linear_1_1104)"
                      />
                      <path
                        d="M20.9994 2.08584e-05L20.9994 4.40912L22.1028 2.79883L27.2887 6.17276L24.6774 9.31665L30.1208 5.86604L20.9994 2.08584e-05Z"
                        fill="url(#paint1_linear_1_1104)"
                      />
                      <path
                        d="M21.0006 2.08584e-05L21.0006 4.40912L19.8972 2.79883L14.7113 6.17276L17.3226 9.31665L11.8792 5.86604L21.0006 2.08584e-05Z"
                        fill="url(#paint2_linear_1_1104)"
                      />
                      <path
                        d="M42 12.8055L33.6515 7.7832L31.9965 9.5084L35.0245 13.4108L21 24.0001L42 12.8055Z"
                        fill="url(#paint3_linear_1_1104)"
                      />
                      <path
                        d="M0 12.8055L8.3485 7.7832L10.0035 9.5084L6.97547 13.4108L21 24.0001L0 12.8055Z"
                        fill="url(#paint4_linear_1_1104)"
                      />
                      <path
                        d="M20.9999 15.4122L19.676 14.6181L20.5755 13.3924L20.9999 12.8054L21.4242 13.3924L22.3238 14.6181L20.9999 15.4122Z"
                        fill="url(#paint5_linear_1_1104)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_1104"
                          x1="21.0001"
                          y1="-2.29958"
                          x2="13.4831"
                          y2="21.7248"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#01FFC2" />
                          <stop offset="0.995" stopColor="#5AB0FF" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1_1104"
                          x1="22.0957"
                          y1="8.64242"
                          x2="29.6975"
                          y2="7.25986"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#01FFC2" />
                          <stop offset="0.995" stopColor="#5AB0FF" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1_1104"
                          x1="19.9043"
                          y1="8.64242"
                          x2="12.3025"
                          y2="7.25986"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#01FFC2" />
                          <stop offset="0.995" stopColor="#5AB0FF" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1_1104"
                          x1="23.5241"
                          y1="8.95679"
                          x2="40.6153"
                          y2="13.0682"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#01FFC2" />
                          <stop offset="0.995" stopColor="#5AB0FF" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_1_1104"
                          x1="18.4759"
                          y1="8.95679"
                          x2="1.38474"
                          y2="13.0682"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#01FFC2" />
                          <stop offset="0.995" stopColor="#5AB0FF" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_1_1104"
                          x1="20.9999"
                          y1="-0.0752834"
                          x2="9.16714"
                          y2="13.4741"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#01FFC2" />
                          <stop offset="0.995" stopColor="#5AB0FF" />
                        </linearGradient>
                      </defs>
                  </svg>
                  <div className='flex flex-col justify-between -leading-3'>
                    <span className='text-[white] text-[14px]'>$NYX Balance</span>
                    <span className='text-[white] font-extrabold text-[15px]'>0 $NYX</span>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <svg className='my-auto' width="38" height="38" viewBox="0 0 38 38"
                  fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.10416 11.0833C8.78922 11.0833 8.48717 11.2085 8.26447 11.4312C8.04178 11.6539 7.91666 11.9559 7.91666 12.2708C7.91666 12.5858 8.04178 12.8878 8.26447 13.1105C8.48717 13.3332 8.78922 13.4583 9.10416 13.4583H15.4375C15.7524 13.4583 16.0545 13.3332 16.2772 13.1105C16.4999 12.8878 16.625 12.5858 16.625 12.2708C16.625 11.9559 16.4999 11.6539 16.2772 11.4312C16.0545 11.2085 15.7524 11.0833 15.4375 11.0833H9.10416Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.5477 12.673C33.4495 12.6667 33.3418 12.6667 33.231 12.6667H28.8404C25.2447 12.6667 22.1667 15.4153 22.1667 19C22.1667 22.5847 25.2447 25.3333 28.8404 25.3333H33.231C33.3418 25.3333 33.4495 25.3333 33.5477 25.327C35.0091 25.2383 36.3011 24.1284 36.4103 22.5767C36.4167 22.4754 36.4167 22.3662 36.4167 22.2648V15.7352C36.4167 15.6338 36.4167 15.5246 36.4103 15.4232C36.3011 13.8716 35.0091 12.7632 33.5477 12.673ZM28.4541 20.6894C29.3787 20.6894 30.1292 19.9326 30.1292 19C30.1292 18.0658 29.3787 17.3106 28.4541 17.3106C27.5278 17.3106 26.7757 18.0674 26.7757 19C26.7757 19.9342 27.5278 20.6894 28.4541 20.6894Z" fill="#9A1BCA"></path><path opacity="0.5" d="M33.4717 12.6698C33.4717 10.7999 33.402 8.79383 32.2082 7.35775C32.0915 7.21707 31.9684 7.08181 31.8392 6.95242C30.6533 5.76808 29.1507 5.24242 27.2951 4.99225C25.4901 4.75 23.1863 4.75 20.2762 4.75H16.9322C14.022 4.75 11.7167 4.75 9.91166 4.99225C8.056 5.24242 6.55341 5.76808 5.3675 6.95242C4.18316 8.13833 3.6575 9.64092 3.40733 11.4966C3.16666 13.3016 3.16666 15.6053 3.16666 18.5155V18.6928C3.16666 21.603 3.16666 23.9083 3.40891 25.7118C3.65908 27.5674 4.18475 29.07 5.36908 30.2559C6.555 31.4403 8.05758 31.9659 9.91325 32.2161C11.7182 32.4583 14.022 32.4583 16.9322 32.4583H20.2762C23.1863 32.4583 25.4917 32.4583 27.2951 32.2161C29.1507 31.9659 30.6533 31.4403 31.8392 30.2559C32.1547 29.9395 32.434 29.589 32.6721 29.2109C33.3846 28.0709 33.4701 26.6744 33.4701 25.3317L33.2326 25.3333H28.8404C25.2447 25.3333 22.1667 22.5847 22.1667 19C22.1667 15.4153 25.2447 12.6667 28.8404 12.6667H33.231C33.3133 12.6667 33.3957 12.6667 33.4717 12.6698Z" fill="#A11DCF"></path>
                  </svg>
                  <span className='text-gray-100 font-extrabold my-auto'>{`${connectedAddresses[0].slice(0,6)}...${connectedAddresses[0].slice(-4)}`}</span>
                </div>
          </div>
      </div>
        )}
      <button disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())} className="my-auto clipButton font-[Nippo] h-[40px] text-[15px]">
        {connecting ? 'connecting' : wallet ? 'disconnect' : 'Connect Wallet'}
      </button>
    </div>
  );
}

export default Connect;