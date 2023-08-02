import type { NextPage } from "next";
import Link from "next/link";

const PropertiesByAreaImagesSectionC: NextPage = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col py-[3.31rem] px-[3.13rem] items-center justify-start gap-[2.81rem] text-center text-[2.5rem] text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col py-[0rem] px-[1.88rem] items-center justify-start gap-[1.5rem] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[3rem] font-semibold">
          Properties by Area
        </div>
        <div className="self-stretch relative text-[1.25rem] leading-[1.75rem] text-gray-400">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap py-[0rem] px-[0.63rem] box-border items-start justify-center max-w-[false] text-left text-[1.5rem] text-gray-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[1.5rem] max-w-[81.25rem]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[1.63rem] lg:flex-row md:flex-col">
            <Link
              className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[15.06rem] flex flex-row items-start justify-start relative bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
              href="/properties-grid-view"
            >
              <div className="my-0 mx-[!important] absolute top-[1rem] left-[1rem] flex flex-col items-start justify-start gap-[0.69rem] z-[0]">
                <div className="relative leading-[2rem] font-semibold">
                  Centerville
                </div>
                <div className="relative text-[1rem] leading-[1.5rem] text-center">
                  25 listings
                </div>
              </div>
            </Link>
            <div className="flex-1 rounded-lg h-[15.06rem] flex flex-row items-start justify-start relative bg-[url(/card-2@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
              <div className="my-0 mx-[!important] absolute top-[1rem] left-[1rem] flex flex-col items-start justify-start gap-[0.69rem] z-[0]">
                <div className="relative leading-[2rem] font-semibold">
                  Centerville
                </div>
                <div className="relative text-[1rem] leading-[1.5rem] text-center">
                  25 listings
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg h-[15.06rem] flex flex-row items-start justify-start relative bg-[url(/card-3@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
              <div className="my-0 mx-[!important] absolute top-[1rem] left-[1rem] flex flex-col items-start justify-start gap-[0.69rem] z-[0]">
                <div className="relative leading-[2rem] font-semibold">
                  Centerville
                </div>
                <div className="relative text-[1rem] leading-[1.5rem] text-center">
                  25 listings
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[1.5rem] lg:flex-row md:flex-col">
            <div className="flex-1 rounded-lg h-[15.06rem] flex flex-row p-[0.63rem] box-border items-start justify-start relative bg-[url(/card-4@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
              <div className="my-0 mx-[!important] absolute top-[1rem] left-[1rem] flex flex-col items-start justify-start gap-[0.69rem] z-[0]">
                <div className="relative leading-[2rem] font-semibold">
                  Arlington
                </div>
                <div className="relative text-[1rem] leading-[1.5rem] text-center">
                  25 listings
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg h-[15.06rem] flex flex-row p-[0.63rem] box-border items-start justify-start relative bg-[url(/card-5@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
              <div className="my-0 mx-[!important] absolute top-[1rem] left-[1rem] flex flex-col items-start justify-start gap-[0.69rem] z-[0]">
                <div className="relative leading-[2rem] font-semibold">
                  Centerville
                </div>
                <div className="relative text-[1rem] leading-[1.5rem] text-center">
                  25 listings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesByAreaImagesSectionC;
