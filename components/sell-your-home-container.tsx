import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type SellYourHomeContainerType = {
  homeSaleRentId?: string;
  homeSaleRentText?: string;

  /** Style props */
  propPadding?: Property.Padding;
  propWidth?: Property.Width;
  propTextDecoration?: Property.TextDecoration;
};

const SellYourHomeContainer: NextPage<SellYourHomeContainerType> = ({
  homeSaleRentId,
  homeSaleRentText,
  propPadding,
  propWidth,
  propTextDecoration,
}) => {
  const sellYourHomeStyle: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  const readMoreStyle: CSS.Properties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[1.38rem] box-border items-start justify-start min-w-[18.75rem] max-w-[21.25rem] text-left text-[1rem] text-gray-700 font-body-large-400"
      style={sellYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[1.5rem]">
        <img
          className="relative w-[4.88rem] h-[4.88rem] overflow-hidden shrink-0"
          alt=""
          src={homeSaleRentId}
        />
        <div className="flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="relative text-[1.5rem] leading-[2rem] font-semibold text-center">
            {homeSaleRentText}
          </div>
          <div className="relative leading-[1.5rem] text-gray-400 flex items-end w-[16.75rem]">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <div
            className="relative leading-[1.5rem] text-primary-500"
            style={readMoreStyle}
          >
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellYourHomeContainer;
