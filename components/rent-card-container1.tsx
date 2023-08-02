import type { NextPage } from "next";
import WashingtonContainer from "./washington-container";

const RentCardContainer1: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col py-[5.38rem] px-[0rem] items-center justify-start gap-[2.44rem] text-center text-[2.5rem] text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start gap-[2.5rem] max-w-[false]">
        <div className="w-[43rem] flex flex-col items-center justify-start gap-[1.5rem] max-w-[false] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[3rem] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-[1.25rem] leading-[1.75rem] text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[2.5rem] text-left text-[1rem] text-gray-white">
          <WashingtonContainer />
          <WashingtonContainer propBackgroundImage={`url("/card-21@3x.png")`} />
          <WashingtonContainer propBackgroundImage={`url("/card-31@3x.png")`} />
          <WashingtonContainer propBackgroundImage={`url("/card-41@3x.png")`} />
        </div>
      </div>
      <div className="rounded bg-primary-500 flex flex-row py-[0.75rem] px-[1.5rem] items-start justify-start text-[1rem] text-gray-white">
        <div className="relative leading-[1.5rem] font-medium">
          Load more listing
        </div>
      </div>
    </div>
  );
};

export default RentCardContainer1;
