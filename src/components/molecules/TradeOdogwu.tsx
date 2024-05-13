import { Activity, Proceed, Sell } from "../../assets"

const TradeOdogwu = () => {
  return (
      <div className='flex flex-col gap-5 w-[21rem] lg:w-[25rem] p-4 h-[30rem] border-[1px] border-[#FAFF0A]'>
          <div className="flex justify-start">
              <img src={ Activity} />
          </div>
          <p className="text-white text-center">TRADE LIKE AN ODOGWU - THE EASIEST WAY TO SELL YOUR CRYPTO</p>
          <div className="flex justify-center gap-1">
              <img src={ Sell} className="w-[10rem]"/>
              <img src={ Proceed} className="w-[10rem]"/>
          </div>
    </div>
  )
}

export default TradeOdogwu