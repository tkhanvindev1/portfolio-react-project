import React from "react";
import "./ToggleSwitchBtn.css"
import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/App.css";

const ToggleSwitch = (props) => {


const handleChange = () => {
   const newTheme = props.theme === 'light' ? 'dark' : 'light';
   props.setTheme(newTheme)
};
   

    return (
        <label className="toggle">
        <input 
        className="toggle__input" 
        type="checkbox" 
        id="switchBtn"
        onChange={handleChange}
        />
        <div className="toggle__fill"></div>
        </label>
    )
}

export default ToggleSwitch;