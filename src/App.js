import React, { useState } from "react";
import Switch from "react-switch";
import Card from "./Components/Card";
function App() {
  const [monthly, setMonthly] = useState(true)
  const [lightMode, setLightMode] = useState(true)
  const [price, setPrice] = useState(16)
  
  return (
    <>

      <div className="relative ">
        <img src="bg-pattern.svg" alt="background-pattern" className={lightMode ? 'absolute w-screen  h-screen-75 -z-20' : 'absolute w-full h-screen-75 -z-20 invert'} />
        <div className=" flex justify-center items-center w-screen h-screen ">
          <div className="w-fit absolute top-10 right-10 ">
            <label className="flex items-center ">
              <div className={lightMode ? "text-black" : "text-white"}>
                <span className="mx-4 select-none cursor-pointer">Turn On {lightMode ? "Dark" : "Light"} Mode</span>

              </div>
              <Switch onChange={setLightMode}
                checked={lightMode} offColor='#79e8e0' onColor='#79e8e0'
                handleDiameter={20}

                uncheckedIcon="" checkedIcon="" />
            </label>
          </div>
          <Card monthly={monthly} setMonthly={setMonthly} lightMode={lightMode} setPrice={setPrice} price={price} />
        </div>
      </div>
    </>
  );
}

export default App;
