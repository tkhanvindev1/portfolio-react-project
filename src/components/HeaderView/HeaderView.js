import React from "react";
import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/components/HeaderView/HeaderView.css";

const HeaderView = () => {

  return (
    <div className="header-content">
      <h2>Let's start <br></br>something big <br></br>together</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ipsum augue, tincidunt ut arcu id, venenatis efficitur leo
      </p>
      <div className="buttons">
        <button>ABOUT ME</button>
        <button>CONTACT</button>
      </div>
    </div>
  );
};

export default HeaderView;