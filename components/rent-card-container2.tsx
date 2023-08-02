import type { NextPage } from "next";

const RentCardContainer2: NextPage = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-row flex-wrap py-[5.38rem] px-[0.31rem] items-start justify-center text-center text-[2.5rem] text-primary-800 font-body-large-400">
      <div className="flex-1 flex flex-col py-[0rem] px-[0.63rem] box-border items-center justify-start gap-[2.5rem] max-w-[56.25rem]">
        <div className="w-[43rem] flex flex-col items-center justify-start gap-[1.5rem] max-w-[false] lg:max-w-[95%] md:self-stretch md:w-auto">
          <p
            className="m-0 self-stretch relative leading-[3rem] font-semibold"
            id="contact-us"
          >
            Contact us
          </p>
          <div className="self-stretch relative text-[1.25rem] leading-[1.75rem] text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-[1.75rem] px-[1.88rem] items-center justify-start gap-[1.06rem] text-left text-[1.5rem] text-darkslategray font-poppins">
          <div className="self-stretch flex flex-col items-center justify-start gap-[0.38rem]">
            <b className="self-stretch relative leading-[2.25rem]">
              Enquiry Form
            </b>
            <div className="self-stretch relative text-[1.13rem] leading-[1.88rem] font-components-input-text text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[0.63rem] text-[1rem] text-darkgray font-components-input-text">
            <div className="self-stretch flex flex-row items-start justify-center gap-[0.63rem] md:flex-col md:gap-[0.63rem] md:items-start md:justify-center">
              <div className="self-stretch flex-1 rounded flex flex-col py-[1rem] px-[0.75rem] items-start justify-start border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch">
                <div className="relative tracking-[0.15px] leading-[1.5rem]">
                  First name
                </div>
              </div>
              <div className="self-stretch flex-1 rounded flex flex-col py-[1rem] px-[0.75rem] items-start justify-center border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch">
                <div className="relative tracking-[0.15px] leading-[1.5rem]">
                  Last name
                </div>
              </div>
            </div>
            <div className="self-stretch rounded flex flex-col py-[1rem] px-[0.75rem] items-start justify-start border-[1px] border-solid border-gray">
              <div className="relative tracking-[0.15px] leading-[1.5rem]">
                Email id
              </div>
            </div>
            <div className="self-stretch rounded box-border h-[6.56rem] flex flex-col p-[0.75rem] items-start justify-start border-[1px] border-solid border-gray">
              <div className="relative tracking-[0.15px] leading-[1.5rem]">
                Comments or questions
              </div>
            </div>
            <div className="rounded bg-primary-500 w-[13.88rem] h-[2.88rem] flex flex-col items-center justify-center text-center text-gray-white">
              <div className="relative inline-block w-[12.7rem]">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCardContainer2;
