import type { NextPage } from "next";
import SellYourHomeContainer from "./sell-your-home-container";

const PropertiesByAreaFeatureCardsCo: NextPage = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col py-[4.38rem] px-[0rem] items-center justify-start text-center text-[2.5rem] text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col pt-[4.69rem] px-[0rem] pb-[0rem] box-border items-center justify-start gap-[3.38rem] max-w-[false]">
        <div className="self-stretch flex flex-col py-[0rem] px-[1.88rem] box-border items-center justify-start gap-[1.5rem] max-w-[false]">
          <div className="self-stretch relative leading-[3rem] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-[1.25rem] leading-[1.75rem] text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[5.38rem] text-left text-[1rem] text-gray-700">
          <SellYourHomeContainer
            homeSaleRentId="/icon.svg"
            homeSaleRentText="Sell your home"
          />
          <SellYourHomeContainer
            homeSaleRentId="/icon1.svg"
            homeSaleRentText="Rent your home"
            propPadding="1.38rem 1rem"
            propWidth="19.5rem"
            propTextDecoration="none"
          />
          <SellYourHomeContainer
            homeSaleRentId="/icon2.svg"
            homeSaleRentText="Buy a home"
            propPadding="1.38rem"
            propWidth="unset"
            propTextDecoration="none"
          />
          <SellYourHomeContainer
            homeSaleRentId="/icon3.svg"
            homeSaleRentText="Free marketing"
            propPadding="1.38rem 1.25rem"
            propWidth="19.5rem"
            propTextDecoration="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertiesByAreaFeatureCardsCo;
