import { Atom, Bitcoin, CoinIcon, Dogecoin, EthereumIcon, LiteCoin, SolanaIcon, Tether, USDIcon } from "../../assets"

const Crypto = () => {
  return (
    <div className="grid grid-cols-3 gap-5 justify-center items-center">
      <div className="w-[5rem] h-[5rem] flex justify-center items-center bg-[#2B2E36] rounded-xl">
        <img src={ LiteCoin} className="w-[3rem]"/>
      </div>
      <div className="w-[5rem] h-[5rem] flex justify-center items-center bg-[#2B2E36] rounded-xl">
        <img src={ Bitcoin} className="w-[3rem]"/>
      </div>
      <div className="w-[5rem] h-[5rem] flex justify-center items-center bg-[#2B2E36] rounded-xl">
        <img src={ Dogecoin} className="w-[3rem]"/>
      </div>
      <div className="w-[5rem] h-[5rem] flex justify-center items-center bg-[#2B2E36] rounded-xl">
        <img src={ CoinIcon} className="w-[3rem]"/>
      </div>
      <div className="w-[5rem] h-[5rem] flex justify-center items-center bg-[#2B2E36] rounded-xl">
        <img src={ Atom} className="w-[3rem]"/>
      </div>
      <div className="w-[5rem] h-[5rem] flex justify-center items-center bg-[#2B2E36] rounded-xl">
        <img src={ EthereumIcon} className="w-[3rem]"/>
      </div>
      <div className="w-[5rem] h-[5rem] flex justify-center items-center bg-[#2B2E36] rounded-xl">
        <img src={ Tether} className="w-[3rem]"/>
      </div>
      <div className="w-[5rem] h-[5rem] flex justify-center items-center bg-[#2B2E36] rounded-xl">
        <img src={ SolanaIcon} className="w-[3rem]"/>
      </div>
      <div className="w-[5rem] h-[5rem] flex justify-center items-center bg-[#2B2E36] rounded-xl">
        <img src={ USDIcon} className="w-[3rem]"/>
      </div>
    </div>
  )
}

export default Crypto