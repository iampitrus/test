import { Activity,Buy,Send } from "../../assets"

const InvestOdogwu = () => {
  return (
      <div className='flex flex-col gap-5 w-[21rem] justify-center lg:w-[25rem] p-4  h-[30rem] border-[1px] border-[#FAFF0A]'>
          <div className="flex justify-start">
              <img src={ Activity} />
          </div>
          <p className="text-white">INVEST LIKE AN ODOGWU - THE MOST EASY WAY OF BUYING CRYPTO </p>
          <div className="flex justify-center gap-1">
              <img src={ Buy} className="w-[10rem]"/>
              <img src={ Send} className="w-[10rem]"/>
          </div>
    </div>
  )
}

export default InvestOdogwu