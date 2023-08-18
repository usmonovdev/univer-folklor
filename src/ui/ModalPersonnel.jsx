import React from "react";
import { useTranslation } from "react-i18next";

const ModalPersonnel = ({ user, name, year, bio, open, setOpen }) => {
  const { t } = useTranslation();
  return (
    <>
      {open ? (
        <div className="w-full z-[10000] py-8 fixed top-0 left-0 w-screen h-screen bg-[#000]/[0.5]">
          <div className="sm:w-[60%] w-[90%] mx-auto max-h-full overflow-y-auto p-8 bg-white flex flex-col items-center">
            <img src={user} alt="" className="w-[100px]" />
            <h1>{t(name)}</h1>
            <h1>{year}</h1>
            <h1>{t(bio)}</h1>
            <div className="w-full flex flex-row items-center gap-3 justify-end cursor-pointer" onClick={() => setOpen(!open)}>
              <h1 className="text-blue">{t("helpers.close")}</h1>
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
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalPersonnel;
