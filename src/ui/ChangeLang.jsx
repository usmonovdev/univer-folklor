import { useTranslation } from "react-i18next";

const ChangeLang = () => {
  const { i18n } = useTranslation();
  return (
    <div>
      <button
        onClick={() =>
          i18n.changeLanguage(`${i18n.language == "uz" ? "ru" : "uz"}`)
        }
        className="capitalize p-3 border rounded-lg text-white hover:bg-[#fff]/[0.2]"
      >
        {i18n.language}
      </button>
    </div>
  );
};

export default ChangeLang;
