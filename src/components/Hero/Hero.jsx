import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.png";
import Mobile from "./Mobile";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div id="main">
      <div className="hero w-full h-full min-h-[600px] lg:flex hidden items-center justify-center">
        <div className="custom-container flex flex-row items-center justify-center gap-4 max-w-[80%] flex">
          <img src={logo} alt="logo" className="w-[80px]" />
          <h1 className="text-[36px] text-white font-black">
            {t("hero.title")}
          </h1>
        </div>
      </div>
      <Mobile />
    </div>
  );
};

export default Hero;
