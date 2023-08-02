import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FormContainerType = {
  houseLine?: string;
  socialMediaLogo?: string;
  socialMediaLogo1?: string;
  socialMediaLogo2?: string;
  socialMediaLogo3?: string;
  socialMediaLogo4?: string;

  /** Style props */
  footerSectionOverflow?: Property.Overflow;
};

const FormContainer: NextPage<FormContainerType> = ({
  houseLine,
  socialMediaLogo,
  socialMediaLogo1,
  socialMediaLogo2,
  socialMediaLogo3,
  socialMediaLogo4,
  footerSectionOverflow,
}) => {
  const footerSectionStyle: CSS.Properties = useMemo(() => {
    return {
      overflow: footerSectionOverflow,
    };
  }, [footerSectionOverflow]);

  return (
    <div
      className="self-stretch flex flex-row p-[3.13rem] items-start justify-start md:self-stretch md:w-auto md:flex-row md:gap-[0rem] sm:flex-col"
      style={footerSectionStyle}
    >
      <footer className="flex-1 flex flex-row items-start justify-between text-left text-[1.5rem] text-gray-black font-body-regular-400 md:flex-col md:gap-[3.13rem] sm:flex-col sm:gap-[3.13rem] sm:flex-[unset] sm:self-stretch">
        <div className="w-[19.5rem] h-[18.75rem] flex flex-col items-start justify-start gap-[1.25rem] text-center text-primary-500 font-body-large-400">
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="relative w-[2.75rem] h-[2.75rem]"
              alt=""
              src={houseLine}
            />
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[1.5rem] font-semibold">
                REIS
              </div>
              <div className="relative text-[0.88rem] leading-[1rem] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="self-stretch h-[10.5rem] flex flex-col items-start justify-start gap-[0.81rem] text-left text-[1rem] text-gray-500 font-body-regular-400">
            <div className="relative text-[1.5rem] leading-[2rem] font-semibold text-gray-black">
              Contact Us
            </div>
            <div className="relative leading-[1.5rem]">Call : +123 400 123</div>
            <div className="relative leading-[1.5rem] flex items-end w-[19.5rem]">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className="relative leading-[1.5rem] text-gray-700">
              Email: example@mail.com
            </div>
          </div>
          <div className="w-[19rem] flex flex-row items-center justify-between">
            <div className="rounded bg-primary-50 flex flex-col p-[0.88rem] items-center justify-center">
              <img
                className="relative w-[1.25rem] h-[1.35rem]"
                alt=""
                src={socialMediaLogo}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-[0.88rem] items-center justify-center">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src={socialMediaLogo1}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-[0.88rem] items-center justify-center">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src={socialMediaLogo2}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-[0.88rem] items-center justify-center">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src={socialMediaLogo3}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-[0.88rem] items-center justify-center">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src={socialMediaLogo4}
              />
            </div>
          </div>
        </div>
        <div className="w-[10.81rem] h-[15.5rem] flex flex-col items-start justify-start gap-[2rem]">
          <div className="relative leading-[2rem] font-semibold">Features</div>
          <div className="self-stretch h-[11.5rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-gray-500">
            <div className="relative leading-[1.5rem]">Home</div>
            <div className="relative leading-[1.5rem]">Become a Host</div>
            <div className="relative leading-[1.5rem]">Pricing</div>
            <div className="relative leading-[1.5rem]">Blog</div>
            <div className="relative leading-[1.5rem]">Contact</div>
          </div>
        </div>
        <div className="w-[10.81rem] h-[15.5rem] flex flex-col items-start justify-start gap-[2rem]">
          <div className="relative leading-[2rem] font-semibold">Company</div>
          <div className="self-stretch h-[11.5rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-gray-500">
            <div className="relative leading-[1.5rem]">About Us</div>
            <div className="relative leading-[1.5rem]">Press</div>
            <div className="relative leading-[1.5rem]">Contact</div>
            <div className="relative leading-[1.5rem]">Careers</div>
            <div className="relative leading-[1.5rem]">Blog</div>
          </div>
        </div>
        <div className="w-[12.69rem] h-[10.5rem] flex flex-col items-start justify-start gap-[2rem]">
          <div className="relative leading-[2rem] font-semibold">
            Team and policies
          </div>
          <div className="self-stretch h-[6.5rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-gray-500">
            <div className="relative leading-[1.5rem]">Terms of servies</div>
            <div className="relative leading-[1.5rem]">Privacy Policy</div>
            <div className="relative leading-[1.5rem]">Security</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FormContainer;
