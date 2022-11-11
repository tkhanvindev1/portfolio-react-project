import React from "react";
import ReactDom from "react-dom"
import LinkComponent from "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/components/UI/LinkComponent/LinkComponent.js"
import { GrClose } from "react-icons/gr"

const MODAL_STYLES = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  paddingLeft: "100px",
  paddingRight: "100px",
  zIndex: 1000,
  height:"1000px",
  width:"1200px",
  borderRadius: "25px",
  backgroundColor:"rgba(223, 223, 223, 1)"
};
const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right:0,
    bottom:0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 1000
}

const HEADER_POPUP = {
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between"
}

function Modal({ open, children, onClose}) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div id="overlay" style={OVERLAY_STYLES}>
        <div className="wrapper" style={MODAL_STYLES}>
          <div className="header" style={HEADER_POPUP}>
          <div id="project-name"><h2 style={{fontSize:"64px"}}>Project name</h2></div>
          <button onClick={onClose} style={{border:"none",backgroundColor:'transparent'}}>
            <GrClose id="close-btn" style={{fontSize:"64px"}}/>
          </button>
          </div>          
          {children}
          <LinkComponent/>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
  }
export default Modal;
