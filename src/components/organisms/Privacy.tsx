import { LogoIcon } from "../../assets"
import Blur from "../atoms/Blur"
import Button from "../atoms/Button"
import Safe from "../molecules/Safe"

const Privacy = () => {
  return (
      <div className="relative flex flex-col w-[22rem] gap-4 p-4 border-[1px] border-[#FAFF0A] rounded-xl lg:w-[60rem] lg:h-[25rem]">
          <div className="flex justify-start items-start">
              <img src={ LogoIcon} className="w-[4rem]" />
          </div>
          <Safe />
          <div className="flex justify-center gap-5">
              <Button type='primary' value='Buy' className='w-[10rem] py-2 text-[#000] text-center rounded-xl'/>
              <Button type='transparent' value='Sell' className='w-[10rem] py-2 text-center rounded-xl border-[1px] border-[#FAFF0A] text-primary'/>
          </div>
          <Blur className='absolute'/>
    </div>
  )
}

export default Privacy