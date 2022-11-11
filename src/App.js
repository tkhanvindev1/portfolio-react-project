// import React, { useRef, useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HeaderView from "./components/HeaderView/HeaderView";
import Path from "./components/Path/Path"
import Portfolio from "./components/Portfolio/Portfolio";
import "./App.css"




function App() {
  // const [theme, setTheme] = useState('theme' ? 'dark' : 'light') 

  // const home = useRef(null)
  // const about = useRef(null)
  // const portfolio = useRef(null)
  // const contact = useRef(null)


  
  return (
    <div className="App">

      <NavigationBar />
      <header>
      <HeaderView/>
      </header>
      <Path/>
      <Portfolio/>
    
     
       </div>
  );
}

export default App;
