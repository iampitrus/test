import { AtmCard } from "../../assets"

const Cards = () => {
  return (
    <div className="w-[18rem] lg:w-[25rem] h-[25rem] flex flex-col justify-center items-center p-2 gap-3 bg-[#1D2025] rounded-xl">
      <div className="flex justify-center items-center">
         <img src={ AtmCard} className="" />
     </div>
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-white">Cards</h1>
      <p className="text-white">Instant crpto to Naira, spend your funds in real world</p>
      </div>
    </div>
  )
}

export default Cards