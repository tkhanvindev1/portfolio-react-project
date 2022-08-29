import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HeaderView from "./components/HeaderView/HeaderView";
import ServiceSection from "./components/ServicesSection/ServiceSection";  
function App() {
  const [theme, setTheme] = useState('theme' ? 'dark' : 'light') 
console.log(theme)
  return (
    <div className={`${theme} App`}  >

      <NavigationBar theme={theme} setTheme={setTheme}  />
      <header className={`${theme} header`}>
      <HeaderView className="img"/>
      </header>
      <ServiceSection/>
      {/* portfolio */}
      {/* about me */}
      {/* contact me */}
       </div>
  );
}

export default App;
