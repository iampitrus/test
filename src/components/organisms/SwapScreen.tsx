import TransCircle from "../atoms/TransCircle"
import Swap from "../molecules/Swap"

const SwapScreen = () => {
  return (
      <div className="mt-[5rem] overflow-hidden relative lg:w-[70vw] lg:h-[70vh] border-[1px] border-primary">
          <TransCircle />
          <Swap/>
    </div>
  )
}

export default SwapScreen