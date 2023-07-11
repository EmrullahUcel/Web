import React from "react";

import { useTranslation } from "react-i18next";

const LangButtons = () => {
  const { t, i18n } = useTranslation();

  const LangHandle = async (lang) => {
    await i18n.changeLanguage(lang.target.value);
  };

  return (
    <div>
      <select onChange={LangHandle} name="" id="">
        <option value="tr">tr</option>
        <option value="en">en</option>
      </select>
    </div>
  );
};

export default LangButtons;
