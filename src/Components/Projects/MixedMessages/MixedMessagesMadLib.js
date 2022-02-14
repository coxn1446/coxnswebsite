import './MixedMessages.css';
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

function MixedMessagesMadLib(props) {

    useEffect(() => {
    //This is my first attempt to put Javascript on a webpage. It may be a little clunky.

    //Picks up values from URL
    const words = new URLSearchParams(window.location.search);

    //Assigns values from URL to variables
    const wordOneResult = words.get('word-1');
    const wordTwoResult = words.get("word-2");
    const wordThreeResult = words.get("word-3");

    //Finds locations of form output and submit button
    const madLibLocation = document.getElementById("mad-lib");

    //Turns URL variables into sentence arrays
    const nounSentence = [`The ${wordOneResult} jumped over the fence.`,`The dog jumped over the ${wordOneResult}.`,
    `Why can't the world be more like a ${wordOneResult}.`, `I need a ${wordOneResult} in my life.`];
    const adjectiveSentence = [`I don't like ${wordTwoResult} dogs.`, `I like ${wordTwoResult} dogs a little too much.`,
    `Have you ever seen a cloud look like a ${wordTwoResult} whale?`, `I need my ${wordTwoResult} back rubbed.`];
    const verbSentence = [`I better ${wordThreeResult} over to the post office.`,`Don't mind me, I'm going to go for a ${wordThreeResult}.`,
    `Should I ${wordThreeResult} this or no?`,`I want you to ${wordThreeResult} me.`];

    //Generates random numbers to be ussed on sentence arrays
    const randomNumGenerator1 = (Math.floor(Math.random()*4));
    const randomNumGenerator2 = (Math.floor(Math.random()*4));
    const randomNumGenerator3 = (Math.floor(Math.random()*4));

    //Generates random Mad Lib by choosing one sentence from each sentence array
    let madLibOutput = `${nounSentence[randomNumGenerator1]} ${adjectiveSentence[randomNumGenerator2]} ${verbSentence[randomNumGenerator3]}`;

    //Places random Mad Lib on webpage
    madLibLocation.innerHTML = madLibOutput;
    },[])

    useEffect(() => {
        props.changeTitle(window.location.pathname)
    },[props])

    return (
        <div className="itemBContainerMadLib" id="itemBContainerMadLib">
            <div className="madLib">
                <p id="mad-lib">Hello</p>
                <button><Link to="/projects/Mixed-Messages">Try Again?</Link></button>
            </div>
        </div>
    );

    
}

export default MixedMessagesMadLib;