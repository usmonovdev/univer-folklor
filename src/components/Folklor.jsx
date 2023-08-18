import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import photo from "../images/photo1.png";
import { personnelsData } from "../data/personnelsData";
import ModalPersonnel from "../ui/ModalPersonnel";

const Folklor = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [cut, setCut] = useState(3);
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [year, setYear] = useState("");
  const [bio, setBio] = useState("");
  return (
    <>
      <div className="relative lg:top-0 top-[100px]" id="personnel">
        <div
          id="facultets"
          className="custom-container py-8 flex flex-col gap-8"
        >
          <h1 className="font-semibold sm:text-[32px] text-[20px] text-center text-[#000339]">
            {t("folklore.title")}
          </h1>
          <div className="w-full flex lg:flex-row flex-col lg:h-[370px] h-fit">
            <div className="lg:w-[50%] w-full h-full">
              <img src={photo} className="object-cover w-full h-full" />
            </div>
            <div className="lg:w-[50%] w-full h-full p-8 bg-blue text-white flex items-center justify-center">
              <h1>{t("folklore.info")}</h1>
            </div>
          </div>
          <div className="card">
            {personnelsData.slice(0, cut).map((personnel) => {
              return (
                <div key={personnel.id} className="p-3 bg-gray-100 rounded-lg text-center flex flex-col items-center gap-3">
                  <img
                    src={personnel.photo}
                    alt={personnel.name}
                    className="w-[200px] h-[250px] object-cover"
                  />
                  <div className="flex flex-col gap-3">
                    <p>{t(personnel.name)}</p>
                    <p>{t(personnel.bio).slice(0, 200)}...</p>
                  </div>
                  <div
                    className="w-full flex flex-row items-center gap-3 cursor-pointer"
                    onClick={() => {
                      setOpen(!open);
                      setUser(personnel.photo);
                      setName(personnel.name);
                      setYear(personnel.year);
                      setBio(personnel.bio);
                    }}
                  >
                    <h1 className="text-start text-blue">
                      {t("helpers.read_more")}
                    </h1>
                    <div>
                      <svg
                        width="27"
                        height="4"
                        viewBox="0 0 27 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.75C0.861929 1.75 0.75 1.86193 0.75 2C0.75 2.13807 0.861929 2.25 1 2.25L1 1.75ZM26.1768 2.17678C26.2744 2.07915 26.2744 1.92086 26.1768 1.82323L24.5858 0.232235C24.4882 0.134604 24.3299 0.134604 24.2322 0.232235C24.1346 0.329866 24.1346 0.488157 24.2322 0.585788L25.6464 2L24.2322 3.41422C24.1346 3.51185 24.1346 3.67014 24.2322 3.76777C24.3299 3.8654 24.4882 3.8654 24.5858 3.76777L26.1768 2.17678ZM1 2.25L26 2.25L26 1.75L1 1.75L1 2.25Z"
                          fill="#0071DC"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {cut >= personnelsData.length ? (
            ""
          ) : (
            <div className="w-full flex items-center justify-center">
              <button className="flex flex-row items-center gap-3" onClick={() => setCut(personnelsData.length)}>
                <p className="text-blue">{t("helpers.see_all")}</p>
                <div>
                  <svg
                    width="27"
                    height="4"
                    viewBox="0 0 27 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.75C0.861929 1.75 0.75 1.86193 0.75 2C0.75 2.13807 0.861929 2.25 1 2.25L1 1.75ZM26.1768 2.17678C26.2744 2.07915 26.2744 1.92086 26.1768 1.82323L24.5858 0.232235C24.4882 0.134604 24.3299 0.134604 24.2322 0.232235C24.1346 0.329866 24.1346 0.488157 24.2322 0.585788L25.6464 2L24.2322 3.41422C24.1346 3.51185 24.1346 3.67014 24.2322 3.76777C24.3299 3.8654 24.4882 3.8654 24.5858 3.76777L26.1768 2.17678ZM1 2.25L26 2.25L26 1.75L1 1.75L1 2.25Z"
                      fill="#0071DC"
                    />
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
      <ModalPersonnel
        open={open}
        setOpen={setOpen}
        name={name}
        bio={bio}
        user={user}
        year={year}
      />
    </>
  );
};

export default Folklor;
