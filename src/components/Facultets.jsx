import React from "react";
import { useTranslation } from "react-i18next";
import photo from "./../images/info.png"
import user from "./../images/folklor.jpg"

const Facultets = () => {
  const { t } = useTranslation();
  return (
    <div className="relative lg:top-0 top-[100px]" id="facultets">
      <div className="custom-container py-8 flex flex-col gap-8">
        <h1 className="font-semibold sm:text-[32px] text-[20px] text-center text-[#000339]">
          {t("facultets.title")}
        </h1>
        <div className="facultets">
          <div className="p-6 bg-blue text-white">
            <h1>{t('facultets.left')}</h1>
            <div className="flex flex-row gap-2 items-center mt-2">
              <img src={user} alt="user" className="w-[60px] rounded-full" />
              <div>
                <p>{t('facultets.author.name')}</p>
                <p>{t('facultets.author.position')}</p>
              </div>
            </div>
          </div>
          <div className="h-full">
            <img src={photo} alt="user" className="object-cover h-full" />
          </div>
          <div className="p-6 bg-blue text-white">
            <h1>{t('facultets.right')}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facultets;
