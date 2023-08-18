import React from "react";
import { useTranslation } from "react-i18next";
import bg from "../../images/bg.png";

const Mobile = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:hidden block relative top-[100px] flex flex-col gap-3">
      <div className="custom-container font-bold">
        <h1 className="text-[#000339] text-[20px]">{t("hero.title")}</h1>
      </div>
      <img src={bg} alt="bg" className="h-[300px] object-cover" />
    </div>
  );
};

export default Mobile;
