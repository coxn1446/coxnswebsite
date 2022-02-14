import './Nav.css';
import { Link } from 'react-router-dom';
import React from 'react';
import menuButton from "../Nav/menubutton.png"

function Nav(props) {
  
  return (
    <nav className="itemAContainer" id="itemAContainer">
      <div className="itemAA" id="itemAA">{props.path}</div>
      <div className="itemABContainer" id="itemABContainer">
        <Link to="/" className="itemABA" id="itemABA">Home</Link>
        <Link to="about" className="itemABB" id="itemABB">About</Link>
        <Link to="projects" className="itemABC" id="itemABC">Projects</Link>
        <Link to="contact" className="itemABD" id="itemABD">Contact</Link>
      </div>
      <div className="itemAC" id="itemAC">
        <img className="menuButton" src={menuButton} alt="menu button" id="menuButton" onClick={props.menuClick}/>
      </div>
    </nav>
  );
}

export default Nav;