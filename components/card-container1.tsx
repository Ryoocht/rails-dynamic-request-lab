import type { NextPage } from "next";

type CardContainer1Type = {
  propertyImage?: string;
  car?: string;
  bathtub?: string;
  arrowsOut?: string;
  ellipse1?: string;
  shareNetwork?: string;
  heart?: string;
  plus?: string;
};

const CardContainer1: NextPage<CardContainer1Type> = ({
  propertyImage,
  car,
  bathtub,
  arrowsOut,
  ellipse1,
  shareNetwork,
  heart,
  plus,
}) => {
  return (
    <div className="rounded-3xs bg-gray-white box-border w-[21.88rem] h-[29.19rem] flex flex-col py-[0.94rem] px-[0.81rem] items-start justify-start gap-[1.44rem] text-left text-[0.91rem] text-gray-700 font-body-large-400 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-[1.25rem]">
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[12.5rem] shrink-0 object-cover"
        alt=""
        src={propertyImage}
      />
      <div className="self-stretch flex flex-row p-[0.63rem] items-start justify-start">
        <div className="flex-1 relative leading-[1.27rem] font-medium">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row p-[0.63rem] items-start justify-start text-[0.85rem] text-primary-500">
        <div className="relative leading-[1.19rem] font-semibold">
          $ 590,693
        </div>
      </div>
      <div className="self-stretch flex flex-row py-[0rem] px-[0.63rem] items-start justify-start gap-[1.06rem] text-[0.68rem] text-gray-500">
        <div className="flex flex-row items-center justify-start gap-[0.27rem]">
          <img className="relative w-[1.09rem] h-[1.09rem]" alt="" src={car} />
          <div className="relative leading-[1.02rem] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0.27rem]">
          <img
            className="relative w-[1.09rem] h-[1.09rem]"
            alt=""
            src={bathtub}
          />
          <div className="relative leading-[1.02rem] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0.27rem]">
          <img
            className="relative w-[1.09rem] h-[1.09rem]"
            alt=""
            src={arrowsOut}
          />
          <div className="relative leading-[1.02rem] font-medium">
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-center text-[0.73rem]">
        <div className="flex flex-row items-center justify-start gap-[0.36rem]">
          <img
            className="relative rounded-[50%] w-[1.72rem] h-[1.72rem] object-cover"
            alt=""
            src={ellipse1}
          />
          <div className="relative leading-[1.09rem] font-medium">
            Jenny Wilson
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0.54rem]">
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[0.18rem] items-start justify-start">
            <img
              className="relative w-[0.91rem] h-[0.91rem]"
              alt=""
              src={shareNetwork}
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[0.18rem] items-start justify-start">
            <img
              className="relative w-[0.91rem] h-[0.91rem]"
              alt=""
              src={heart}
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[0.18rem] items-start justify-start">
            <img
              className="relative w-[0.91rem] h-[0.91rem]"
              alt=""
              src={plus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer1;
