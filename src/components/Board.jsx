import React from "react";
import { useTranslation } from "react-i18next";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { boardData } from "./../data/boardData";
import "swiper/css/pagination";

const Board = () => {
  const { t } = useTranslation();
  return (
    <div className="relative lg:top-0 top-[100px] bg-[#DDF0FF]">
      <div className="custom-container py-8 flex flex-col gap-8">
        <h1 className="font-semibold sm:text-[32px] text-[20px] text-center text-[#000339]">
          {t("life")}
        </h1>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {boardData.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <div className="w-full flex items-center justify-center mb-[70px]">
                  <img src={data.photo} alt="data" className="sm:w-[50%] md:w-[80%] w-full rounded-lg" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Board;
