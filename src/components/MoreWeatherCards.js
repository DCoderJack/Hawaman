import React, { useEffect, useState } from 'react'

const MoreWeatherCards = (props) => {
  let {city, apiKey} = props;
  const [weather, setWeather] = useState([])

  const options = {
    method : 'GET',
    headers : {
      'X-RapidAPI-Key': `${apiKey}`,
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const fetchWeather = async() => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    let data = await fetch(url, options);
    let weatherData = await data.json();
    // console.log(weatherData);
    setWeather(weatherData);
}

  useEffect(()=>{
    fetchWeather();
  },[])

  return (
    <>
    <div className="container w-50">

      <div className="mb-3 text-center">

        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm bg-dark text-light">
            <div className= {`card-header py-3 text-bg-${props.bg}`}>
              <h4 className="my-0 fw-normal">{city}</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title"><span><b id="temp2">{weather.temp}</b></span><small className="text-muted fw-light"><span>&#8451;</span></small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                  <li>Feels Like <span><b id="feels2">{weather.feels_like}</b></span> <small className="text-muted fw-light"><span>&#8451;</span></small></li>
                  <li>Humidity <span><b id="humidity2">{weather.humidity}</b></span> <small className="text-muted fw-light"><span>%</span></small></li>
                  <li>Wind Speed <span><b id="windS2">{weather.wind_speed}</b></span> <small className="text-muted fw-light"><span>km/h</span></small></li>
                  <li>Min/Max Temp <span><b id="minMaxT2">{weather.min_temp}/{weather.max_temp}</b></span> <small className="text-muted fw-light"><span>&#8451;</span></small></li>
                  <li>Wind Degree <span><b id="windD2">{weather.wind_degrees}</b></span> <small className="text-muted fw-light"><span>&#176;</span></small></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>

    </>
  )
}

export default MoreWeatherCards

