import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import thumbilnail from "./../images/video.png";
import { BsFillPlayFill } from "react-icons/bs";
import { VideoModal } from "../ui";

const Festivals = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative lg:top-0 top-[100px] bg-[#DDF0FF]">
        <div className="custom-container py-8 flex flex-col gap-8">
          <h1 className="font-semibold sm:text-[32px] text-[20px] text-center text-[#000339]">
            {t("festivals.title")}
          </h1>
          <div className="flex items-center justify-center">
            <img src={thumbilnail} alt="thumbilnail"/>
            <div
              className="absolute sm:w-[70px] w-[50px] sm:h-[70px] h-[50px] bg-blue rounded-full cursor-pointer flex items-center justify-center"
              onClick={() => setOpen(!open)}
            >
              <BsFillPlayFill className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <VideoModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Festivals;
