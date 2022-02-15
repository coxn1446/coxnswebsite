import './OpenWeather.css';
import React, {useEffect} from 'react';
import openWeatherLogo from "./OpenWeather-Logo.jpeg";

function OpenWeather(props) {

      useEffect(() => {
        props.changeTitle(window.location.pathname)
    },[props])

    return (
        <div className="openWeatherContainer">
            <div className="itemBContainerOpenWeather" id="itemBContainerOpenWeather">
                <a href="https://openweathermap.org/"><img src={openWeatherLogo} className="OpenWeatherLogo"/></a>
            </div>
            <div className="itemCContainerOpenWeather" id="itemCContainerOpenWeather">
                <form onsubmit="return false" id="formOpenWeather"> 
                     <div className="itemCAOpenWeather" id="itemCAOpenWeather">
                        <input id="city" type="text" name="city" required placeholder="Type a city"/>
                    </div>
                    <div className="itemCBOpenWeather" id="itemCBOpenWeather">
                        <select id="state" name="state">
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticutt</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    <div className="itemCCOpenWeather" id="itemCCOpenWeather">
                        <input type="submit" id="submit" value="What's the Weather?"/>
                    </div>
                </form>
            </div>
            <div id="itemDContainerOpenWeather" className="itemDContainerOpenWeather">
                <div id="itemDAOpenWeather" className="itemDAOpenWeather">
                    <p id="place">Portland, Maine</p>
                </div>
                <div id="itemDB" className="itemDB">
                    <p id="temp"></p>
                    <br></br>
                    <p id="windspeed"></p>
                    <br></br>
                    <p id="humidity"></p>
                    <br></br>
                    <p id="weather1"></p>
                </div>
                <div id="itemDCOpenWeather" className="itemDCOpenWeather">
                    <img id="weatherImage" src="" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default OpenWeather;