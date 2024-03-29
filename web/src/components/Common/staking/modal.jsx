const Modal = props => {
    return (
      <>
        <div className="fixed inset-0 opacity-25 bg-black">
        </div>
        <div className="fixed inset-0 flex justify-center items-center z-10 mx-2">
          <div className="bg-white w-full max-w-[580px] flex flex-col gap-3 p-3">
            <div className="flex justify-between">
                <h1>Select Staking Option</h1>
                <div onClick={() => props.setModalState(false)}>
                x
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 justify-between">
              <div className="w-full bg-gray-400">hello</div>
              <div className="w-full bg-[red]">helloaaaa</div>
              <div className="w-full bg-gray-300">hellobbb</div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-4 px-[20px]">
                    <input className="w-full bg-red-50" type="text" />
                    <button className="py-[10px] px-[20px]">Max</button>
                </div>
                <div className="flex gap-2 items-center">
                    <h1>$PAAL Balance:</h1>
                    <h1>0 $PAAL</h1>
                </div>
            </div>
            <h1>You are staking 212 $PAAL tokens.</h1>
            <button className="w-full bg-red-200">Stake</button>
          </div>
        </div>
      </>
    )
  }
  
  export default Modal