import type { NextPage } from "next";
import CardContainer from "./card-container";

const RentCardContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col py-[5.38rem] px-[0rem] items-center justify-start gap-[2.44rem] text-center text-[2.5rem] text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start gap-[2.5rem] max-w-[false] md:pl-[3.75rem] md:pr-[3.75rem] md:box-border">
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
        <div className="self-stretch flex flex-row flex-wrap py-[0rem] px-[0.63rem] items-center justify-center gap-[2rem] text-left text-[0.91rem] text-gray-700">
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc@2x.png"
            imageDimensionsText="/car.svg"
            imageDimensionsText2="/bathtub.svg"
            imageDimensionsCode="/arrowsout.svg"
            imageDimensionsCode2="/sharenetwork.svg"
            imageDimensionsCodeText="/plus.svg"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc1@2x.png"
            imageDimensionsText="/car.svg"
            imageDimensionsText2="/bathtub.svg"
            imageDimensionsCode="/arrowsout.svg"
            imageDimensionsCode2="/sharenetwork.svg"
            imageDimensionsCodeText="/plus1.svg"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc2@2x.png"
            imageDimensionsText="/car1.svg"
            imageDimensionsText2="/bathtub1.svg"
            imageDimensionsCode="/arrowsout1.svg"
            imageDimensionsCode2="/sharenetwork1.svg"
            imageDimensionsCodeText="/plus2.svg"
          />
          <CardContainer
            imageDimensions="/unsplashrlwe8f8anoc3@2x.png"
            imageDimensionsText="/car1.svg"
            imageDimensionsText2="/bathtub1.svg"
            imageDimensionsCode="/arrowsout1.svg"
            imageDimensionsCode2="/sharenetwork1.svg"
            imageDimensionsCodeText="/plus2.svg"
          />
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

export default RentCardContainer;
