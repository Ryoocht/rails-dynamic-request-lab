import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AddressContainer from "../components/address-container";
import FormContainer from "../components/form-container";

const PropertiesGridView: NextPage = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-center text-[3.25rem] text-gray-white font-body-regular-400">
      <header className="self-stretch bg-gray-white h-[6.13rem] flex flex-row py-[1.38rem] px-[5rem] box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-[1.5rem] text-primary-500 font-body-large-400 lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border md:pl-[1.5rem] md:pr-[1.5rem] md:box-border">
        <div className="flex-1 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="relative w-[2.75rem] h-[2.75rem]"
              alt=""
              src="/houseline.svg"
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
          <div className="flex flex-row items-center justify-end gap-[2.25rem] text-[0.88rem] text-primary-900 sm:flex">
            <div className="flex flex-row items-start justify-start gap-[1.88rem] lg:hidden">
              <div className="relative leading-[1.38rem]">HOME</div>
              <div className="relative leading-[1.38rem]">ABOUT US</div>
              <div className="relative leading-[1.38rem]">OUR AGENTS</div>
              <div className="relative leading-[1.38rem] font-semibold">
                PROPERTIES
              </div>
              <div className="relative leading-[1.38rem]">GALLERY</div>
              <div className="relative leading-[1.38rem]">BLOG</div>
              <div className="relative leading-[1.38rem]">CONTACT US</div>
              <div className="relative leading-[1.38rem]">SEARCH</div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex">
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          </div>
        </div>
      </header>
      <div className="self-stretch h-[15rem] flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-center justify-start gap-[0.75rem]">
          <div className="relative leading-[4.5rem] font-semibold">
            Properties
          </div>
          <div className="relative text-[1rem] leading-[1.5rem] text-whitesmoke-200 font-body-large-400">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col pt-[4rem] px-[0rem] pb-[0.5rem] items-center justify-start gap-[5.94rem] text-left text-[1rem] text-gray-black font-body-large-400 lg:pl-[7.5rem] lg:pr-[7.5rem] lg:box-border md:pl-[3.75rem] md:pr-[3.75rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
        <div className="w-[17rem] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[1rem]">
            <div className="flex flex-row items-start justify-start gap-[0.5rem]">
              <img
                className="relative w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/listbullets.svg"
              />
              <img
                className="relative w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/squaresfour.svg"
              />
            </div>
            <div className="relative leading-[1.5rem]">Sort by:</div>
            <Dropdown
              overlay={
                <Menu>
                  {(
                    [
                      { value: "Popular properties" },
                      { value: "Latest properties" },
                      { value: "Recommended properties" },
                    ] as any
                  ).map((option: any, index: number) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <AddressContainer />
        <div className="flex flex-row items-end justify-center gap-[0.5rem] text-center text-primary-500">
          <div className="rounded bg-primary-50 flex flex-row p-[0.63rem] items-start justify-start">
            <img
              className="relative w-[1.5rem] h-[1.5rem]"
              alt=""
              src="/arrowleft.svg"
            />
          </div>
          <div className="rounded-10xs bg-primary-500 flex flex-col py-[0.63rem] px-[0.56rem] items-start justify-start text-gray-white">
            <div className="relative leading-[1.5rem] font-semibold flex items-end justify-center w-[1.63rem]">
              1
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col py-[0.63rem] px-[0.56rem] items-start justify-start">
            <div className="relative leading-[1.5rem] font-semibold flex items-end justify-center w-[1.63rem]">
              2
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col py-[0.63rem] px-[0.56rem] items-start justify-start">
            <div className="relative leading-[1.5rem] font-semibold flex items-end justify-center w-[1.63rem]">
              3
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col py-[0.63rem] px-[0.56rem] items-start justify-start">
            <div className="relative leading-[1.5rem] font-semibold flex items-end justify-center w-[1.63rem]">
              ...
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col py-[0.63rem] px-[0.56rem] items-start justify-start">
            <div className="relative leading-[1.5rem] font-semibold flex items-end justify-center w-[1.63rem]">
              54
            </div>
          </div>
          <div className="rounded bg-primary-500 flex flex-row p-[0.63rem] items-start justify-start">
            <img
              className="relative w-[1.5rem] h-[1.5rem]"
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
      <FormContainer
        houseLine="/houseline2.svg"
        socialMediaLogo="/social-media-logo5.svg"
        socialMediaLogo1="/social-media-logo6.svg"
        socialMediaLogo2="/social-media-logo7.svg"
        socialMediaLogo3="/social-media-logo8.svg"
        socialMediaLogo4="/social-media-logo9.svg"
        footerSectionOverflow="hidden"
      />
    </div>
  );
};

export default PropertiesGridView;
