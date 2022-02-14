import './MixedMessages.css';
import React, {useEffect} from 'react';
import { createBrowserHistory } from "history";

function MixedMessages(props) {

    const history = createBrowserHistory();

    const handleSubmit = () => {
        history.push(`Mixed-Messages-MadLib`);
      };

      useEffect(() => {
        props.changeTitle(window.location.pathname)
    },[props])

    return (
        <div className="itemBContainerMadLib">
            <br></br>
            <p>Please use the inputs belows to create your own Mad Lib. All three fields are required to produce an output.
            </p>
            <form method="get" className="madLib">
                <label for="word-1">Noun (singular)</label>
                <input id="word-1" type="text" name="word-1" required/>
                <br></br>
                <label for="word-2">Adjective</label>
                <input id="word-2" type="text" name="word-2" required/>
                <br></br>
                <label for="word-3">Verb (present tense)</label>
                <input id="word-3" type="text" name="word-3" required/>
                <br></br>
                <input type="submit" id="submit" value="Generate a Mad Lib" onClick={handleSubmit}/>
            </form>
        </div>
    );
}

export default MixedMessages;