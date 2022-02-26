import './MixedMessages.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import { createBrowserHistory } from "history";

function MixedMessages(props) {

    const history = createBrowserHistory();

    const [wordOne, setWordOne] = useState('');
    const handleWordOneChange = (e) => {
        setWordOne(e.target.value)
    }

    const [wordTwo, setWordTwo] = useState('');
    const handleWordTwoChange = (e) => {
        setWordTwo(e.target.value)
    }

    const [wordThree, setWordThree] = useState('');
    const handleWordThreeChange = (e) => {
        setWordThree(e.target.value)
    }


    const handleSubmit = () => {
        history.push(`Mixed-Messages-MadLib?word-1=${wordOne}&word-2=${wordTwo}&word-3=${wordThree}`);
    };

    useEffect(() => {
        props.changeTitle(window.location.pathname)
    },[props])

    return (
        <div className="itemBContainerMadLib">
            <br></br>
            <p id="paragraphMadLib">Please use the inputs belows to create your own Mad Lib. All three fields are required to produce an output.
            </p>
            <form className="madLib">
                <label for="word-1">Noun (singular)</label>
                <input id="word-1" type="text" name="word-1" onChange={handleWordOneChange} required/>
                <br></br>
                <label for="word-2">Adjective</label>
                <input id="word-2" type="text" name="word-2" onChange={handleWordTwoChange} required/>
                <br></br>
                <label for="word-3">Verb (present tense)</label>
                <input id="word-3" type="text" name="word-3" onChange={handleWordThreeChange} required/>
                <br></br>
            </form>
            <button id="submitMadLib" onClick={handleSubmit}><Link to="/projects/Mixed-Messages-MadLib">Submit Your MadLib</Link></button>
        </div>
    );
}

export default MixedMessages;