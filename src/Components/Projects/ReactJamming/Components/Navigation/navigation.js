import React from 'react';
import "../Navigation/navigation.css"


class Navigation extends React.Component {

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing </h1>
                <div class="itemABContainer" id="itemABContainer">
                    <div class="itemABA" id="itemABA"><a href="https://coxn1446.github.io/index.html">Home</a></div>
                    <div class="itemABB" id="itemABB"><a href="https://coxn1446.github.io/HTML/About.html">About</a></div>
                    <div class="itemABC" id= "itemABC"><a href="https://coxn1446.github.io/HTML/Projects.html">Projects</a></div>
                    <div class="itemABD" id= "itemABD"><a href="https://coxn1446.github.io/HTML/ContactMe.html">Contact</a></div>
                </div>
            </div>
        )
    }
}

export default Navigation;