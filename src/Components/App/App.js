import './App.css';
import Home from "../Home/Home"
import About from "../About/About"
import Projects from "../Projects/Projects"
  import MixedMessages from "../Projects/MixedMessages/MixedMessages"
    import MixedMessagesMadLib from '../Projects/MixedMessages/MixedMessagesMadLib';
  import GridTemplate from "../Projects/GridTemplate/GridTemplate"
import Contact from "../Contact/Contact"
import Nav from "../Nav/Nav"
import {Routes, Route} from "react-router-dom"
import React, {useState} from 'react';


function App() {

  const [title, setTitle] = useState("Coxn's Site");
  const changeTitle = (locationPath) => {
    if (locationPath === "/") {
      setTitle("Coxn's Site")
    } else {
    let removeSlash = locationPath.substring(locationPath.lastIndexOf("/")+1);
    let result = removeSlash.charAt(0).toUpperCase() + removeSlash.slice(1);
    setTitle(result.replace(/-/g," "))
    }
  };

  const [mobileMenu, setMobileMenu] = useState(true);
  const changeMobileMenu = () => {
    const itemAContainer = document.getElementById("itemAContainer");
    const itemABContainer = document.getElementById("itemABContainer");
    if (mobileMenu) {
      itemAContainer.style.gridRow="span 4";
      itemAContainer.style.gridTemplateRows = "repeat(8,1fr)";
      itemABContainer.style.display="grid";
      setMobileMenu(false)
    } else {
      itemAContainer.style.gridRow="span 2";
      itemAContainer.style.gridTemplateRows = "repeat(2,1fr)";
      itemABContainer.style.display="none";
      setMobileMenu(true)
    }
  }

  
  return (
    <div className="containerGrid">
      <Nav 
        path={title}
        menuClick={changeMobileMenu}  
      />
      <Routes>
        <Route 
          path="/" 
          element={<Home 
            changeTitle={changeTitle}
          />}
        />
        <Route
          path="about"
          element={<About
            changeTitle={changeTitle} 
          />}
        />
        <Route
          path="projects"
          element={<Projects 
            changeTitle={changeTitle} 
          />}
        />
        <Route
          path="projects/Mixed-Messages"
          element={<MixedMessages
            changeTitle={changeTitle}
          />}
        />
        <Route
          path="projects/Mixed-Messages-MadLib"
          element={<MixedMessagesMadLib
            changeTitle={changeTitle}
          />}
        />
        <Route
          path="projects/Grid-Template"
          element={<GridTemplate
            changeTitle={changeTitle}
          />}
        />
        <Route
          path="contact"
          element={<Contact
            changeTitle={changeTitle}
          />}
        />
      </Routes>  
    </div>
  );
}

export default App;
