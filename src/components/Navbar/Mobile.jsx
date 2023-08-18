import React from "react";
import logo from "../../images/logo.png";
import { LiaTimesSolid } from "react-icons/lia";
import { navbarData } from "../../data/navbarData";
import { useTranslation } from "react-i18next";

const Mobile = ({ open, setOpen }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed top-0 left-0 w-screen h-screen bg-white py-6 z-[10000]`}
    >
      <div className="w-full px-6 flex flex-row justify-between items-center">
        <img src={logo} alt="logo" className="w-[50px]" />
        <LiaTimesSolid
          className="text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4">
        <ul className="flex flex-col">
          {navbarData.map((data) => {
            return (
              <li key={data.id} className="hover:bg-black/[0.1] px-6 py-4 border border-t-0 border-l-0 border-r-0">
                <a href={`#${data.link}`}>{t(data.title)}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
