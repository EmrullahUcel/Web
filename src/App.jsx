import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import BackPage from "./components/BackPage";
import { useReducer } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { MainContext } from "./components/Context";

const initialState = {
  bgColor: "white",
  color: "black",
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case "dark":
      return { bgColor: "rgb(62,55,55)", color: "white" };
    case "light":
      return { bgColor: "white", color: "black" };
  }
};

const App = () => {
  const { t, i18n } = useTranslation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = {
    i18n,
    t,
  };

  const handleDark = (e) => {
    const buton = e.target.checked;
    if (buton === true) {
      dispatch({ type: "dark" });
      e.style = "none";
    } else dispatch({ type: "light" });
  };
  const langHandle = async (lang) => {
    await i18n.changeLanguage(lang.target.value);
  };

  return (
    <MainContext.Provider value={data}>
      <div
        style={{
          transition: "all 2s",
          backgroundColor: state.bgColor,
          color: state.color,
        }}
        className="pc:w-full pc:h-screen pc:flex pc:items-center pc:justify-center pc:text-base
    phone:flex phone:flex-col justify-center phone:items-center phone:text-xs over 
    "
      >
        <div className="flex w-full justify-evenly">
          <select onChange={langHandle} name="" id="">
            <option value="tr">tr</option>
            <option value="en">en</option>
          </select>
          <div>
            <label htmlFor="dark">
              <input
                id="dark"
                type="checkbox"
                className="hidden"
                onChange={handleDark}
              />
              <FaMoon className="moon cursor-pointer" />
              <FaSun className="sun cursor-pointer" />
            </label>
            <label htmlFor="light">
              <input id="light" type="checkbox" className="hidden" />
            </label>
          </div>
        </div>
        <BackPage state={state}>
          <Header />
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
