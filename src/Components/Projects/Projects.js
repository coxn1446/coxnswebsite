import './Projects.css';
import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';

function Projects(props) {
    useEffect(() => {
        props.changeTitle(window.location.pathname)
    },[props])
    
  return (
    <div className="itemBContainerProjects" id="itemBContainerProjects">
        <Link to="Mixed-Messages" className="projectsLink">Mixed Messages</Link>
        <p className="projectsParagraph">
            An interactive mad lib using basic HTML forms.
        </p>
        <Link to="Grid-Template" className="projectsLink">Grid Template</Link>
        <p className="projectsParagraph">
            CSS Grid can create a better web page layout. I have a few media queries too so this page should resize depending on the size of your browser.
        </p>
        <Link to="Open-Weather" className="projectsLink">Open Weather</Link>
        <p className="projectsParagraph">
            Calls a 3rd party API and displays its info on a webpage. This tool searches for current weather in any US city.
        </p>
        <a href="https://coxnisjamming.surge.sh/" className="projectsLink">Jamming</a>
        <p className="projectsParagraph">
            This link brings you off site to another React.js app. The app calls the Spotify API to search for tracks and save them to a playlist. All styling was copied from a pre-fab template. This app was deployed by surge.sh through npm. Unfortunately, to make this app function properly I need to add your Spotify email to my app's database. So if you're actually interested in using this app, text me. Otherwise you'll just have to trust that it works exactly as I have intended it to.
        </p>
        <Link to="/" className="projectsLink">React Router</Link>
        <p className="projectsParagraph">
            This version of the website is built with React Router. It is a one-page web app which doesn't make calls to the server when pages re-render. I have re-written all my old projects to work with this new format, using stuff like JSX, useEffect(), useState(), etc.
        </p>
    </div>
  );
}

export default Projects;