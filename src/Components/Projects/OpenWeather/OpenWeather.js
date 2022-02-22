import './OpenWeather.css';
import React, {useState, useEffect, useRef} from 'react';
import openWeatherLogo from "./OpenWeather-Logo.jpeg";
import ash from "../OpenWeather/WeatherImage/ash.jpeg";
import clear from "../OpenWeather/WeatherImage/clear.jpeg";
import clouds from "../OpenWeather/WeatherImage/clouds.jpeg";
import drizzleRain from "../OpenWeather/WeatherImage/drizzlerain.jpeg"
import dust from "../OpenWeather/WeatherImage/dust.jpeg";
import fog from "../OpenWeather/WeatherImage/fog.jpeg";
import haze from "../OpenWeather/WeatherImage/haze.jpeg";
import mist from "../OpenWeather/WeatherImage/mist.jpeg";
import rain from "../OpenWeather/WeatherImage/Rain.jpeg";
import sand from "../OpenWeather/WeatherImage/sand.jpeg";
import smoke from "../OpenWeather/WeatherImage/smoke.jpeg";
import snow from "../OpenWeather/WeatherImage/Snow.jpeg";
import squall from "../OpenWeather/WeatherImage/squall.jpeg";
import thunderstorm from "../OpenWeather/WeatherImage/thunderstorm.jpeg";
import tornado from "../OpenWeather/WeatherImage/tornado.jpeg";

function OpenWeather(props) {
  //Communicates with the Open Weather API
  const apiKey = "d1d96effdd50f855cbc2baa09b4e40f8";
  const url = "https://api.openweathermap.org/data/2.5/weather";

  let [weather, setWeather] = useState('');
  let [humidity, setHumidity] = useState('');
  let [place, setPlace] = useState('');
  let [weatherImage, setWeatherImage] = useState('');
  let [weatherImageAltText, setWeatherImageAltText] = useState('')
  let [windSpeed, setWindSpeed] = useState('');
  let [temperature, setTemperature] = useState('');
  let [itemDContainerDisplay, setItemDContainerDisplay] = useState('none');

  let [cityResultOpenWeather, setCityResultOpenWeather] = useState('');
  const handleCityChange = (e) => {
    setCityResultOpenWeather(e.target.value)
  }

  let [stateResultOpenWeather, setStateResultOpenWeather] = useState('');
  const handleStateChange = (e) => {
    setStateResultOpenWeather(e.target.value)
  }

  const fetchOpenWeather = async() => {

      let urlToFetch = `${url}?q=${cityResultOpenWeather},us-${stateResultOpenWeather}&appid=${apiKey}&units=imperial`
      try {
        const response = await fetch(urlToFetch);
        if (response.ok) { 
          const jsonResponse = await response.json();
          console.log(jsonResponse)
          setWeather(`Weather: ${jsonResponse['weather'][0]['main']}`);
          setHumidity(`Humidity: ${jsonResponse['main']['humidity']}%`);
          setPlace(`${cityResultOpenWeather}, ${stateResultOpenWeather}`);
          setTemperature(`Temperature: ${jsonResponse['main']['temp']} degrees`);
          setWindSpeed(`Wind Speed: ${jsonResponse['wind']['speed']} knots`);
          setItemDContainerDisplay("grid");
          switch (jsonResponse.weather[0].main) {
              case 'Clouds':
                setWeatherImage(clouds)
                setWeatherImageAltText("clouds")
                break;
              case 'Thunderstorm':
                  setWeatherImage(thunderstorm)
                  setWeatherImageAltText("thunderstorm")
                break;
              case 'Drizzle':
                  setWeatherImage(drizzleRain)
                  setWeatherImageAltText("drizzling rain")
                break;
              case 'Rain':
                  setWeatherImage(rain)
                  setWeatherImageAltText("pouring rain")
                break;
              case 'Snow':
                  setWeatherImage(snow)
                  setWeatherImageAltText("snowfall")
                break;
              case 'Mist':
                  setWeatherImage(mist)
                  setWeatherImageAltText("misty")
                break;
              case 'Smoke':
                  setWeatherImage(smoke)
                  setWeatherImageAltText("smokey weather")
                break;
              case 'Haze':
                  setWeatherImage(haze)
                  setWeatherImageAltText("hazy weather")
                break;
              case 'Dust':
                  setWeatherImage(dust)
                  setWeatherImageAltText("dust ball")
                break;
              case 'Fog':
                  setWeatherImage(fog)
                  setWeatherImageAltText("foggy")
                break;
              case 'Sand':
                  setWeatherImage(sand)
                  setWeatherImageAltText("sand")
                break;
              case 'Ash':
                  setWeatherImage(ash)
                  setWeatherImageAltText("volcano ash")
                break;
              case 'Squall':
                  setWeatherImage(squall)
                  setWeatherImageAltText("squall")
                break;
              case 'Tornado':
                  setWeatherImage(tornado)
                  setWeatherImageAltText("tornado")
                break;
              case 'Clear':
                  setWeatherImage(clear)
                  setWeatherImageAltText("clear weather")
                break;
              default:
                  setWeatherImage(openWeatherLogo)
                  setWeatherImageAltText("Open Weather Logo")
          }
        }
      } catch (error) {
        console.log(error)
      }
  };

  let [searchOpenWeather, setSearchOpenWeather] = useState(false)
  const handleSearchOpenWeather = () => {
    if (searchOpenWeather) {
      setSearchOpenWeather(false)
    } else {
      setSearchOpenWeather(true)
    }
  }

  let initialRender = useRef(true);
  
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
    } else {
      fetchOpenWeather();
    }
  },[searchOpenWeather])

  useEffect(() => {
    props.changeTitle(window.location.pathname)
  },[props])

    return (
        <div className="openWeatherContainer">
            <div className="itemBContainerOpenWeather" id="itemBContainerOpenWeather">
                <a href="https://openweathermap.org/"><img src={openWeatherLogo} className="OpenWeatherLogo"/></a>
            </div>
            <div className="itemCContainerOpenWeather" id="itemCContainerOpenWeather">
                <form id="formOpenWeather"> 
                     <div className="itemCAOpenWeather" id="itemCAOpenWeather">
                        <input id="city" type="text" name="city" required placeholder="Type a city" onChange={handleCityChange}/>
                    </div>
                    <div className="itemCBOpenWeather" id="itemCBOpenWeather">
                        <select id="state" name="state" onChange={handleStateChange}>
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
                        <input type="button" id="submit" value="What's the Weather?" onClick={handleSearchOpenWeather}/>
                    </div>
                </form>
            </div>
            <div id="itemDContainerOpenWeather" className="itemDContainerOpenWeather" style={{display:itemDContainerDisplay}}>
                <div id="itemDAOpenWeather" className="itemDAOpenWeather">
                    <p id="place">{place}</p>
                </div>
                <div id="itemDBOpenWeather" className="itemDBOpenWeather">
                    <p id="temp">{temperature}</p>
                    <br></br>
                    <p id="windspeed">{windSpeed}</p>
                    <br></br>
                    <p id="humidity">{humidity}</p>
                    <br></br>
                    <p id="weather1">{weather}</p>
                </div>
                <div id="itemDCOpenWeather" className="itemDCOpenWeather">
                    <img id="weatherImage" src={weatherImage} alt={weatherImageAltText}/>
                </div>
            </div>
        </div>
    );
}

export default OpenWeather;