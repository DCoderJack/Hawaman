import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'
import { Link } from 'react-router-dom';

const Weather = (props) => {
    let {weatherCity, mode, apiKey} = props;
    
    const [weather, setweather] = useState([]);
    const [city, setCity] = useState(weatherCity);

    const options = {
        method : 'GET',
        headers : {
          // 'X-RapidAPI-Key': 'd1085bd089msh3b332757ace770bp1f4d05jsne57a0f2b45ac',
          'X-RapidAPI-Key': `${apiKey}`,
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const fetchWeather = async() => {
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
        let data = await fetch(url, options);
        let weatherData = await data.json();
        console.log(weatherData);
        setweather(weatherData);
    }
    
    useEffect(() => {
      fetchWeather();
    }, [city])

    const onChange = (event) => {
        setCity(event.target.value);
    }
    

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link >
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link >
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">About</Link >
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact">Contact</Link >
              </li> */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Countries
                </Link >
                <ul className="dropdown-menu">
                  <li onClick={(e)=>{e.preventDefault(); setCity('America')}}><Link className="dropdown-item" to="/">America</Link ></li>
                  <li onClick={(e)=>{e.preventDefault(); setCity('Germany')}}><Link className="dropdown-item" to="/">Germany</Link ></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li onClick={(e)=>{e.preventDefault(); setCity('Italy')}}><Link className="dropdown-item" to="/">Italy</Link ></li>
                  <li onClick={(e)=>{e.preventDefault(); setCity('Switzerland')}}><Link className="dropdown-item" to="/">Switzerland</Link ></li>
                  <li onClick={(e)=>{e.preventDefault(); setCity('Canada')}}><Link className="dropdown-item" to="/">Canada</Link ></li>

                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Indian Cities
                </Link >
                <ul className="dropdown-menu">
                  <li className="nav-item text-center" onClick={(e)=>{e.preventDefault(); setCity('Mumbai')}}> <Link className="dropdown-item" to="/">Mumbai</Link ></li> 
                  <li className="nav-item text-center" onClick={(e)=>{e.preventDefault(); setCity('Chennai')}}><Link className="dropdown-item" to="/">Chennai</Link ></li>
                  <li className="nav-item text-center" onClick={(e)=>{e.preventDefault(); setCity('Hyderabad')}}><Link className="dropdown-item" to="/">Hyderabad</Link ></li>
                  </ul>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Mumbai" onChange={onChange}  aria-label="Search"/>
              <button className="btn btn-outline-success" onClick={(e)=>{e.preventDefault()}} type="submit">Search</button>
            </form>
          </div>
        </div>
    </nav>

    <WeatherCard city={city} temp_c={weather.temp} feelslike_c = {weather.feels_like} humidity = {weather.humidity} wind_kph = {weather.wind_speed} wind_degree = {weather.wind_degrees}/>
    </>
  )
}

export default Weather