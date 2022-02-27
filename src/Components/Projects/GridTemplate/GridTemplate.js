import './GridTemplate.css';
import React, {useState, useEffect} from 'react';

function GridTemplate(props) {


    //Assigns the section of HTML that I want to change colors to a variable
    let colors = ["goldenrod","salmon","cornflowerblue","ivory","khaki","navajowhite","navy","olive"];

    useEffect(() => {
        props.changeTitle(window.location.pathname)
    },[props])

    let [colorButtonGridTemplate, setColorButtonGridTemplate] = useState(false);
    const handleClickColorButon = () => {
        if (colorButtonGridTemplate === false) {
           setColorButtonGridTemplate(true);
        } else {
           setColorButtonGridTemplate(false);
        };
    };

    let [colorsGridTemplate, setColorsGridTemplate] = useState("goldenrod");
    useEffect(() => {
        let randomNumber = (Math.floor(Math.random()*9));
        setColorsGridTemplate(colors[randomNumber]);
    },[colorButtonGridTemplate])

    let [formSubmitGridTemplate, setFormSubmitGridTemplate] = useState(false);
    const handleSubmitFormGridTemplate = () => {
        setFormSubmitGridTemplate(true);
    };

    let [itemJADisplayGridTemplate, setitemJADisplayGridTemplate] = useState("block");
    let [itemJBDisplayGridTemplate, setitemJBDisplayGridTemplate] = useState("none");


    useEffect(() => {
        if (formSubmitGridTemplate === false) {
            setitemJADisplayGridTemplate("block");
            setitemJBDisplayGridTemplate("none");
         } else {
            setitemJADisplayGridTemplate("none");
            setitemJBDisplayGridTemplate("block");
         };
    },[formSubmitGridTemplate])

    

    return (
        <div className="gridContainerGridTemplate">
            <div className="itemBContainerGridTemplate" id="itemBContainerGridTemplate">
                <div className="itemBAGridTemplate">Alex Ovechkin</div>
            </div>
            <div className="itemCContainerGridTemplate" id="itemCContainerGridTemplate">
                <div className="itemCAGridTemplate">Martin St. Louis</div>
            </div>
            <div className="itemDContainerGridTemplate" id="itemDContainerGridTemplate">
                <div className="itemDAGridTemplate">Patrick Kane</div>
            </div>
            <div className="itemEContainerGridTemplate" id="itemEContainerGridTemplate">
                <div className="itemEAGridTemplate">Tim Thomas</div>
            </div>
            <div 
                className="itemFContainerGridTemplate"
                id="itemFContainerGridTemplate"
                style={{backgroundColor: colorsGridTemplate}}
            >
                <div 
                    className="itemFAGridTemplate"
                >
                    <button type="button" id="changeColorButtonGridTemplate" className="changeColorButtonGridTemplate" onClick={handleClickColorButon}>Change the Color</button>
                </div>
            </div>
            <div className="itemGContainerGridTemplate" id="itemGContainerGridTemplate">
                <div className="itemGAGridTemplate">Firework Themed Gender Reveal Party Takes Expected Turn for Worse</div>
                <div className="itemGBContainerGridTemplate">
                    <div className="itemGBAGridTemplate"></div>
                    <div className="itemGBBGridTemplate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus libero, fermentum quis venenatis at, efficitur ut nisi. Integer non eleifend diam. Fusce ullamcorper maximus sem ac sodales. Vestibulum tincidunt ligula tincidunt pharetra vulputate. Donec viverra scelerisque libero quis dictum.</div>
                </div>
            </div>
            <div className="itemHContainerGridTemplate" id="itemHContainerGridTemplate">
                <div className="itemHAGridTemplate">Local Man Puts Phone Down, Goes Outside</div>
                <div className="itemHBContainerGridTemplate">
                    <div className="itemHBAGridTemplate"></div>
                    <div className="itemHBBGridTemplate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus libero, fermentum quis venenatis at, efficitur ut nisi. Integer non eleifend diam. Fusce ullamcorper maximus sem ac sodales. Vestibulum tincidunt ligula tincidunt pharetra vulputate. Donec viverra scelerisque libero quis dictum.</div>
                </div>
            </div>
            <div className="itemIContainerGridTemplate" id="itemIContainerGridTemplate">
                <div className="itemIAGridTemplate">Benevolent Government Discovers Citizen Without Mask</div>
                <div className="itemIBContainerGridTemplate">
                    <div className="itemIBAGridTemplate"></div>
                    <div className="itemIBBGridTemplate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus libero, fermentum quis venenatis at, efficitur ut nisi. Integer non eleifend diam. Fusce ullamcorper maximus sem ac sodales. Vestibulum tincidunt ligula tincidunt pharetra vulputate. Donec viverra scelerisque libero quis dictum.</div>
                </div>
            </div>
            <div className="itemJContainerGridTemplate" id="itemJContainerGridTemplate">
                <div
                    className="itemJAGridTemplate" id="itemJAGridTemplate"
                    style={{display: itemJADisplayGridTemplate}}
                >
                    <p>Tell me what you think of the website!</p>
                    <form>
                        <textarea id="message" required rows="10" cols="50"></textarea>
                    </form>
                    <button onClick={handleSubmitFormGridTemplate} id="submitButtonGridTemplate">Submit</button>
                </div>
                <div
                    className="itemJBGridTemplate" id="itemJBGridTemplate"
                    style={{display: itemJBDisplayGridTemplate}}
                >I don't care what you think</div>
                <div className="itemJCGridTemplate">
                    <p>All images were obtained under creative commons license. This page was made for no reason besides fun.</p>
                </div>
            </div>
        </div>
    );
}

export default GridTemplate;