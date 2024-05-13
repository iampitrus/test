import { BuyIcon, SellIcon } from "../../assets"

const Swap = () => {
  return (
      <div className="flex justify-around items-center">
          <img src={BuyIcon} className="lg:w-[20rem] lg:h-[20rem]"/>
          <img src={SellIcon} className="lg:w-[20rem] lg:h-[20rem]"/>
    </div>
  )
}

export default Swap