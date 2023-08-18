import React from "react";
import logo from "../images/logo.png";
import { useTranslation } from "react-i18next";
import { ChangeLang } from "../ui";
import facebook from "./../images/facebook.svg";
import twitter from "./../images/twitter.svg";
import prime from "./../images/prime.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="relative lg:top-0 top-[100px] py-4 bg-blue">
      <div className="custom-container flex flex-col gap-8">
        <ul className="flex md:flex-row flex-col md:gap-0 gap-8 justify-between w-full text-white">
          <li className="w-[70px]">
            <img src={logo} alt="logo" />
          </li>
          <li>
            <ul className="flex flex-col gap-2">
              <li className="text-[20px]">
                <a href="/">{t("footer.main.title")}</a>
              </li>
              <li>
                <a href="#personnel">{t("footer.main.personnel")}</a>
              </li>
              <li>
                <a href="#facultets">{t("footer.main.facultets")}</a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-2">
              <li className="text-[20px]">
                <a href="/">{t("footer.about.title")}</a>
              </li>
              <li>
                <a href="#">{t("footer.about.section")}</a>
              </li>
              <li>
                <a href="#">{t("footer.about.facultet_about")}</a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-2">
              <li className="text-[20px]">
                <a href="#">{t("footer.council.title")}</a>
              </li>
              <li>
                <a href="#">{t("footer.council.festivals")}</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-3 items-center">
            <ChangeLang />
            <a href="tel:+998712333650">
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.50931 1.44424C4.6094 -0.655843 8.15333 -0.496196 9.6156 2.12396L10.4269 3.57762C11.3818 5.28864 10.9748 7.4475 9.57696 8.86246C9.55834 8.88796 9.45967 9.03163 9.44738 9.28265C9.4317 9.60305 9.54549 10.344 10.6935 11.4921C11.8412 12.6397 12.5821 12.7538 12.9026 12.7382C13.1538 12.726 13.2976 12.6273 13.3231 12.6086C14.7381 11.2107 16.8969 10.8038 18.608 11.7587L20.0616 12.57C22.6818 14.0323 22.8414 17.5762 20.7413 19.6763C19.618 20.7996 18.1244 21.7977 16.3691 21.8643C13.768 21.9629 9.44891 21.2911 5.17168 17.0139C0.894454 12.7367 0.222721 8.41762 0.321331 5.81646C0.387872 4.06121 1.38599 2.56757 2.50931 1.44424ZM7.97831 3.0377C7.22954 1.69602 5.21743 1.38778 3.83514 2.77007C2.86595 3.73925 2.23587 4.80902 2.19498 5.88749C2.11275 8.05667 2.6483 11.8389 6.49751 15.6881C10.3467 19.5373 14.1289 20.0728 16.2981 19.9906C17.3766 19.9497 18.4463 19.3196 19.4155 18.3504C20.7978 16.9682 20.4896 14.956 19.1479 14.2073L17.6942 13.396C16.79 12.8914 15.5198 13.0635 14.6282 13.9551L14.6279 13.9554C14.5403 14.0429 13.983 14.5629 12.9937 14.611C11.9809 14.6603 10.755 14.2052 9.3677 12.8179C7.97994 11.4301 7.52503 10.2039 7.57463 9.19095C7.62307 8.20156 8.14335 7.64456 8.23041 7.55749L8.23044 7.55745C9.12209 6.66581 9.29424 5.39563 8.78958 4.49136L7.97831 3.0377Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-row gap-3">
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
          <div className="w-[70px]">
            <a href="https://primetechgroup.uz/">
              <img src={prime} alt="prime" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
