import Cards from "../molecules/Cards"
import SwapCard from "../molecules/SwapCard"
import OnChain from "./OnChain"

const Instant = () => {
  return (
       <div className="mt-[30rem] lg:w-[60rem] lg:mt-0  h-[35rem] flex flex-col justify-center items-center gap-3 p-4 bg-gradient-to-r from-[#121212]-500 from-50%  to-[#121212]-500  to-10% rounded-xl">
          <h1 className="text-white text-[28px] font-bold">Instant Cash <span className="text-[#FAFF0A]">Withdrawal</span> For Every Use Case</h1>
          <p className="text-white"><span className="text-[#FAFF0A]">Cryptance</span> allows you to move money <span className="text-[#FAFF0A]">seamlessly</span> from cold wallets, to hot wallets, to bank accounts — in minutes</p>
          <div className="flex flex-col gap-5 lg:flex-row">
              <Cards />
              <OnChain />
              <SwapCard/>
          </div>
    </div>
  )
}

export default Instant