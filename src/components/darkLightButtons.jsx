import React from 'react'
import { useReducer , useEffect} from 'react';
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

const DarkLightButtons = ({colorTransfer}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleDark = (e) => {
        const buton = e.target.checked;
        if (buton === true) {
          dispatch({ type: "dark" });
          e.style = "none";
        } else dispatch({ type: "light" });
        colorTransfer(state )
      };
     
   


  return (
    <>
      <div className="flex w-full justify-evenly">
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
        
    </>
  )
}

export default DarkLightButtons;