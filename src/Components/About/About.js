import './About.css';
import React, { useEffect } from 'react';

function About(props) {

  useEffect(() => {
    props.changeTitle(window.location.pathname)
  },[])

  return (
    <div>
        <h1>About</h1>
        <p>Coming Soon</p>
    </div>
  );
}

export default About;