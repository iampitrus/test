import { LogoIcon } from "../../assets"
import Button from "../atoms/Button"

const FooterHero = () => {
  return (
      <div className='flex flex-col gap-4 p-4'>
          <img src={ LogoIcon} className="w-[10rem]"/>
          <p className="text-white lg:w-[40rem]">
              Stay ahead of the curve with Cryptnance's exclusive email insights.
              Embrace the future of finance with Cryptnance, your gateway to the world of cryptocurrency.
              Stay informed, get expert insights, and maximize your crypto experience by joining our vibrant community.
          </p>

          <div className="flex  gap-3">
              <input placeholder="Email Address" type="text" className="w-[15rem] lg:w-[25rem] px-4 py-2 bg-[#FAFF0A] text-[#000] rounded-3xl" />
              <Button value='send' type='primary' className='w-[7rem] lg:w-[10rem] py-2 text-[#000] bg-[#FAFF0A] rounded-3xl text-center'/>
          </div>
    </div>
  )
}

export default FooterHero