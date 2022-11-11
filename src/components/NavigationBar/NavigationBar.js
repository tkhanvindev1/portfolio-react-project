import React from "react";
// import ToggleSwitch from "../UI/ToggleSwitchBtn/ToggleSwitchBtn";
import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/components/NavigationBar/NavigationBar.css";

const NavigationBar = (props) => {
  return (
    <div className="navbar-div">
      <div className="navbar-component" id="logo-div">
        <div id="logo">Vinh Nguyen</div>
      </div>
      {/* <ToggleSwitch theme={props.theme} setTheme={props.setTheme} /> */}
      <ul>
        <a href="google.com">about</a>
        <a href="google.com">projects</a>
        <a href="google.com">contact</a>
      </ul>
    </div>
  );
};

export default NavigationBar;
