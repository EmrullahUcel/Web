import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import BackPage from "./components/BackPage";
import { useReducer } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

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
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleDark = (e) => {
    const buton = e.target.checked;
    if (buton === true) {
      dispatch({ type: "dark" });
      e.style = "none"
    }else 
    dispatch({ type: "light" });
  };
  const handleLight = () => {
    
  };
  return (
    <div
      style={{
        transition:"all 2s",
        backgroundColor: state.bgColor,
        color: state.color,
      }}
      className="pc:w-full pc:h-full pc:flex pc:flex-col pc:items-center pc:justify-center pc:text-base
    phone:flex phone:flex-col justify-center phone:items-center phone:text-xs
    "
    >
      <div className="flex mt-5 w-1">
        <label  htmlFor="dark">
          <input
            id="dark"
            type="checkbox"
            className="hidden"
            onChange={handleDark}
          />
          <FaMoon className="moon absolute" />
          <FaSun className="sun absolute" />
        </label>
        <label htmlFor="light">
          <input
            id="light"
            type="checkbox"
            className="hidden"
            onChange={handleLight}
          />
        </label>
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
  );
};

export default App;
