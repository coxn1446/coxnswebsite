import './Home.css';
import React, { useEffect } from 'react';

function Home(props) {

  useEffect(() => {
    props.changeTitle(window.location.pathname)
  },[])

  return (
      <div className="itemBContainerHome" id="itemBContainerHome">
        <div className="itemBAHome" id="itemBAHome"></div>
        <div className="itemBBContainerHome" id="itemBBContainerHome">
          <p className="halHome">"With a payoff of something like 100 million to 1! Even if the odds of succeeding to this degree are slim are they really 100 million to one against? Something to think about..."</p>
        </div>
      </div>
  );
}

export default Home;