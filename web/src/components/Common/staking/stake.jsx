import React from "react";
// import Connect from "./buttons/connectwallet";

const Stake = ({ data }) => {

    return (
        <>
            <div className="w-full border border-slate-500 rounded-xl lg:px-6 px-3 py-5 relative bg-transparent flex flex-col gap-3 font-[VioletSans]">
                <div className="flex items-center justify-between">
                    <h1 className="text-base font-bold text-gray-200 bg-clip-text">{data.days} Days</h1>
                    <h2 className="text-sm font-medium text-gray-400">{data.nyxpercent}% ETH Rewards Share </h2>
                </div>
                <h1 className="text-gray-400">
                    <span className="text-2xl font-bold">{data.percent}%</span>
                    <span className="ml-2 text-base font-bold">APR</span>
                </h1>
                <div className="flex flex-col gap-1.5">
                    <div className="w-full rounded-full bg-gray-600 h-2.5">
                        <div className="rounded-full h-full bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2]" style={{ width: `${data.progressbar}%` }}>
                        </div>
                    </div>
                    <div className="flex items-center justify-between text-sm font-medium">
                        <h1 className="bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text">0 $PAAL/{data.progressbar}% </h1>
                    </div>
                </div>
                {/* <Connect /> */}Connect
            </div>
        </>
    );
}

export default Stake;