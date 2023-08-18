import React, { useState } from "react";
import { navbarData } from "../../data/navbarData";
import { useTranslation } from "react-i18next";
import { ChangeLang } from "../../ui/";
import Mobile from "./Mobile";

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed w-full z-[10000]">
      <div className="custom-container">
        <div className="w-full h-[70px] mt-4 flex flex-row justify-between items-center bg-blue rounded-lg px-4 text-white">
          <div
            className="lg:hidden block cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.2607 10.2083C30.2607 10.8123 29.7711 11.302 29.167 11.302L5.83365 11.302C5.22959 11.302 4.7399 10.8123 4.7399 10.2083C4.7399 9.60419 5.22959 9.1145 5.83365 9.1145L29.167 9.1145C29.7711 9.1145 30.2607 9.60419 30.2607 10.2083Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.2607 17.5C30.2607 18.1041 29.7711 18.5938 29.167 18.5938L5.83365 18.5938C5.22959 18.5938 4.7399 18.1041 4.7399 17.5C4.7399 16.8959 5.22959 16.4063 5.83365 16.4063L29.167 16.4062C29.7711 16.4062 30.2607 16.8959 30.2607 17.5Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.2607 24.7917C30.2607 25.3958 29.7711 25.8855 29.167 25.8855L5.83365 25.8855C5.22959 25.8855 4.7399 25.3958 4.7399 24.7917C4.7399 24.1877 5.22959 23.698 5.83365 23.698L29.167 23.698C29.7711 23.698 30.2607 24.1877 30.2607 24.7917Z"
                fill="white"
              />
            </svg>
          </div>
          <ul className="lg:flex hidden flex-row gap-6">
            {navbarData.map((data) => {
              return (
                <li key={data.id}>
                  <a href={`#${data.link}`}>{t(data.title)}</a>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-row items-center gap-4">
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
        </div>
        <Mobile open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;
