import React from "react";
import ToggleSwitch from "../UI/ToggleSwitchBtn/ToggleSwitchBtn";
import '/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/components/NavigationBar/NavigationBar.css';





const NavigationBar = (props) => {
  return (
    <div className={`${props.theme} container`}>
<ToggleSwitch theme ={props.theme} setTheme={props.setTheme}/>
{/*//2.nav-links: 3.to ul list */}
<ul className={`${props.theme} navbar-nav`}>

<li>
        <a>about me</a>
</li>

<li>
        <a>services</a>
</li>

<li>
        <a>contact</a>
</li>

</ul>

</div>
  );
};

export default NavigationBar;
