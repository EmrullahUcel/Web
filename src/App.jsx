import MainSection from "./components/MainSection";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import BackPage from "./components/BackPage";
import { useState , } from "react";
import { useTranslation } from "react-i18next";
import { MainContext } from "./components/Context";
import LangButtons from "./components/LangButtons";
import DarkLightButtons from "./components/darkLightButtons";

const App = () => {
  const [transfer, setTransfer] = useState([]);
  //change lang start
  const { t, i18n } = useTranslation();
  const data = {
    i18n,
    t,
  };
  //change lang end


  const colorTransfer = (state ) => {
    setTransfer(state);
    console.log(transfer.bgColor);
  };

  return (
    <MainContext.Provider value={data}>
      <div
        style={{
          transition: "all 1s",
          backgroundColor: transfer.bgColor,
          color: transfer.color,
        }}
        className="pc:w-full pc:h-full pc:flex pc:items-center pc:justify-center pc:text-base
    phone:flex phone:flex-col justify-center phone:items-center phone:text-xs over 
    "
      >
        <div className="w-full flex justify-evenly">
        <LangButtons />
        <DarkLightButtons colorTransfer={colorTransfer} />
        </div>
        <BackPage transfer={transfer}>
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BackPage>
      </div>
    </MainContext.Provider>
  );
};

export default App;
