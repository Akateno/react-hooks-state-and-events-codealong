import React, {useState} from "react";

function Toggle() {
  //whenever using a react hook it must be within a react component 
  const [isOn, setIsOn]=useState(false);
  function handleClick(){
    setIsOn((isOn)=>!isOn)
  }
  const color = isOn? "red":"white";
  return <button style={{background: color}}onClick={handleClick}>{isOn ? "ON":"OFF"}</button>;
}

export default Toggle;
