import React from "react";
import { useTranslation } from "react-i18next";
import { facultetsData } from "../data/facultetsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const Facultets = () => {
  const { t } = useTranslation();
  return (
    <div className="relative lg:top-0 top-[100px]" id="facultets">
      <div className="custom-container py-8 flex flex-col gap-8">
        <h1 className="font-semibold sm:text-[32px] text-[20px] text-center text-[#000339]">
          {t("facultets.title")}
        </h1>
        <div className="">
          <Swiper
            slidesPerView="1"
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {facultetsData.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <div className="mb-[70px]">
                    <img
                      src={data.photo}
                      className="rounded-lg rounded-b-none"
                    />
                    <div className="min-h-[130px] bg-gray-100 rounded-lg rounded-t-none">
                      <h1 className="font-semibold sm:text-[32px] text-[20px] text-[#000339] px-4">
                        {t(data.title)}
                      </h1>
                      <p className="p-4">{t(data.desc)}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Facultets;
