import FooterHero from "../molecules/FooterHero"
import LegalLink from "../molecules/LegalLink"
import ProductLink from "../molecules/ProductLink"

const Footer = () => {
  return (
      <div className="mt-[25rem]  lg:mt-0 lg:w-[80rem] flex flex-col justify-between items-center lg:flex-row">
          <FooterHero />
          <div className="flex gap-5">
              <ProductLink />
              <LegalLink/>
          </div>
    </div>
  )
}

export default Footer