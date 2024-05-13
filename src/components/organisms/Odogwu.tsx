import InvestOdogwu from "../molecules/InvestOdogwu"
import TradeOdogwu from "../molecules/TradeOdogwu"

const Odogwu = () => {
  return (
      <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-[#FAFF0A] rounded-full font-bold text-center w-[13rem] py-4 border-[1px] border-[#FAFF0A]">
              Speed Like Odogwu
          </div>
          <p className="text-[18px] text-white">Where Crypto Becomes Instant Cash, Anytime, Anywhere!</p>
          <div className="flex flex-col justify-center gap-2 lg:flex-row">
              <InvestOdogwu />
              <TradeOdogwu/>
          </div>
    </div>
  )
}

export default Odogwu