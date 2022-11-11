import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";

const ICON_STYLES = {
  height:"60px",
  width:"60px",
  marginLeft:"40px",
  marginRight:"40px",
  color:"black"
}

const CONTAINER_STYLES = {
  display:"flex",
  flexDirection:"row",
  justifyContent:"center"   
 }

 const DEVIDER_STYLES = {
  content: "",
  height: "42px",
  border: "3px solid",
  borderRadius:"30%",
  marginTop:"9px",
  backgroundColor:"black"
 }

function LinkComponent() {

  return(
  <div className="links-container" style={CONTAINER_STYLES}>
    <a
      className="icon-btn"
      href="https://github.com/tkhanvindev1?tab=repositories"
    >
      <FaGithub className="icons" style={ICON_STYLES}/>
    </a>
    <span className="divider-component" style={DEVIDER_STYLES}></span>
    <a className="icon-btn" href="https://www.instagram.com/v1nh.dev/">
      <CgWebsite lassName="icons" style={ICON_STYLES}/>
    </a>
    <span className="divider-component" style={DEVIDER_STYLES}></span>
    <a
      className="icon-btn"
      href="https://www.linkedin.com/in/vinh-nguyen-157181217/"
    >
      <FaYoutube className="icons" style={ICON_STYLES}/>
    </a>
  </div>
  )
}
export default LinkComponent;
