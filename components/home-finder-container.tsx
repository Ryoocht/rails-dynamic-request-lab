import type { NextPage } from "next";
import { useCallback } from "react";
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
import { useRouter } from "next/router";

const HomeFinderContainer: NextPage = () => {
  const router = useRouter();

  const onSearchCTAContainerClick = useCallback(() => {
    router.push("/properties-grid-view");
  }, [router]);

  return (
    <div className="self-stretch flex flex-col py-[7.5rem] px-[1.88rem] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-[3.25rem] text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[3.88rem] max-w-[false]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem] md:max-w-full">
          <div className="self-stretch relative leading-[4.5rem] font-semibold">
            Find Your Dream Home
          </div>
          <div className="self-stretch relative text-[1.25rem] leading-[1.75rem] font-body-large-400 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.06rem] text-[1rem] text-primary-400 font-body-large-400">
          <div className="flex flex-row items-start justify-start gap-[0.63rem]">
            <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.5rem] bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-[1rem] leading-[1.5rem] font-medium font-body-large-400 text-gray-white text-center">
                Rent
              </div>
            </button>
            <div className="rounded bg-gray-white overflow-hidden flex flex-row py-[0.75rem] px-[1.5rem] items-start justify-start">
              <div className="relative leading-[1.5rem] font-medium">Sale</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-primary-700">
            <div className="flex-1 rounded-lg bg-gray-white flex flex-row py-[2rem] px-[3.88rem] box-border items-center justify-between max-w-[87.5rem] md:w-[18.75rem] md:flex-col md:gap-[1.25rem] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[8.56rem] flex flex-col items-start justify-start gap-[1rem]">
                <div className="relative leading-[1.5rem] capitalize font-semibold">
                  Locations
                </div>
                <Dropdown
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "New York" },
                          { value: "Los Angeles" },
                          { value: "Chicago" },
                          { value: "Berlin" },
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
                    {`Select your city `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="w-[11.06rem] flex flex-col items-start justify-start gap-[1rem] text-left">
                <div className="relative leading-[1.5rem] capitalize font-semibold flex items-end w-[9.38rem]">
                  Property Type
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "Studio apartments" },
                          { value: "One-bedroom apartments" },
                          { value: "Two-bedroom apartments" },
                          { value: "Three-bedroom apartments" },
                          { value: "Four or more bedroom apartments/houses" },
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
                    {`Select property type `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="w-[9.69rem] flex flex-col items-start justify-start gap-[1rem] text-left">
                <div className="relative leading-[1.5rem] capitalize font-semibold flex items-end w-[9.38rem]">
                  Rent Range
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "$500-$2000" },
                          { value: "$2500-$10000" },
                          { value: "$10000+" },
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
                    {`Select rent range `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div
                className="rounded bg-mediumseagreen w-[6.38rem] flex flex-row py-[0.75rem] px-[1.5rem] box-border items-center justify-center cursor-pointer text-gray-white hover:bg-darkslateblue"
                onClick={onSearchCTAContainerClick}
              >
                <div className="relative leading-[1.5rem] font-medium">
                  Search
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFinderContainer;
