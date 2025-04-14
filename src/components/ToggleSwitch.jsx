import { useState } from "react";
// import "./index.css";  // Make sure Tailwind CSS is imported here
import { IoToggleSharp } from "react-icons/io5";


export const ToggleSwitch=()=> {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    console.log("Toggle is now", !isOn ? "ON" : "OFF");
  };

  return (
<>
<div className="flex items-center justify-center  h-screen bg-gray-100">
      <div className="flex items-center gap-4">
        <span className="text-base font-medium text-red-700"><IoToggleSharp/></span>
        <button
          onClick={toggleSwitch}
          className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
            isOn ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isOn ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
</>
  )
}

