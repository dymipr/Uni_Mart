import Stake from "./stake";
import Historyview from "./historyView";
import Connect from "../buttons/connectwallet";

function Dashboard() {
  return (
    <div className="font-[RobotoMono] w-full lg:p-8 p-4 flex flex-col gap-10">
      <div className="md:flex hidden items-center justify-between">
        <h1 className="text-[23px] font-extrabold bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] text-transparent bg-clip-text mt-2">
          Staking
        </h1>
        <div className="flex items-center">
          <Connect />
        </div>
      </div>
      <div className="flex flex-col w-full items-start gap-5">
        <div className="w-full">
          <h1 className="lg:text-[23px] text-lg font-extrabold   bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text">
            Pool Size
          </h1>
          <p className="lg:text-lg text-sm font-medium text-white text-opacity-75">
            Leverage the power of compounding by staking your $PAAL tokens and
            compounding rewards as they accrue.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-10 gap-5 w-full ">
          <Stake
            data={{
              days: 14,
              nyxpercent: "1.20",
              percent: 3,
              progressbar: 3,
            }}
          />
          <Stake
            data={{
              days: 28,
              nyxpercent: "6",
              percent: 10,
              progressbar: 5,
            }}
          />
          <Stake
            data={{
              days: 56,
              nyxpercent: "92.8",
              percent: 15,
              progressbar: 10,
            }}
          />
        </div>
      </div>
      <Historyview />
    </div>
  );
}

export default Dashboard;
