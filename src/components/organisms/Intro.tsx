import BtnSection from '../molecules/BtnSection'
import BtnTrader from '../molecules/BtnTrader'

const Intro = () => {
  return (
    <div className='relative text-center'>
          <h1 className='text-white text-[24px] lg:text-[68px] font-bold'>Best place to buy and sell  your <h1 className='text-primary'>Crypto Currency</h1> Asset</h1>
          <p className='text-white text-[18px] lg:text-[21px]'>
              
              Unlock the power of instant crypto-to-naira and naira-to-crypto transactions with <p className='text-primary'>Cryptnance.</p>
              Click below to experience the future of crypto convenience!
          </p>

      <BtnSection />
      <BtnTrader/>
    </div>
  )
}

export default Intro
