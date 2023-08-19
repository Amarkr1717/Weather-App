import React, { useState } from 'react'
import './WeatherApp.css'

import clear_sun from '../Assets/clear_sun.png';
import cloudy from '../Assets/cloudy.png';
import humidity from '../Assets/humidity.jpg';
import rainy from '../Assets/rainy.jpg';
import search_logo from '../Assets/search_logo.png';
import snow from '../Assets/snow.jpeg';
import windy from '../Assets/windy.jpeg';

const WeatherApp = () => {

  let api_key="397672a3723568132591207f65e1ef68";

  const[wicon , setWicon] = useState(cloudy)

  const search = async ()=>{
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value===""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind =  document.getElementsByClassName("wind-rate");
    const tempature =  document.getElementsByClassName("weather-temp");
    const location =  document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity +'%';
    wind[0].innerHTML = data.wind.speed + 'km/h';
    tempature[0].innerHTML = data.main.temp+ '°c';
    location[0].innerHTML = data.name;
    
  }
  return (
    <div className='container'>
        <div className="top-bar">
            <input type='text' className='cityInput' placeholder='search location'/>
            <div className="search_icon" onClick={()=>{search()}}>
                <img src={search_logo} alt='' width='25px'/>
            </div>
        </div>
      <div className="weather-image">
        <img src={cloudy} alt="" width='70' />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt='' className='icon' width='50px'/>
          <div className='data'>
            <div className='humidity-percent'>64%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windy} alt='' className='icon' width='50px'/>
          <div className='data'>
            <div className='wind-rate'>18 km/h</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp

