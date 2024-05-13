import Crypto from "../molecules/Crypto"

const OnChain = () => {
  return (
     <div className="w-[18rem] lg:w-[25rem] h-[25rem] flex flex-col gap-3 p-2 bg-[#1D2025] rounded-xl">
      <div className="flex justify-center items-center">
         <Crypto/>
     </div>
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-white font-bold">ON CHAIN</h1>
        <p className="text-white">Move,Trade and accept funds across chains in one click</p>
      </div>
    </div>
  )
}

export default OnChain