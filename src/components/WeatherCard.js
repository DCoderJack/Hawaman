import React from 'react'

const WeatherCard = (props) => {
  let {city, temp_c, feelslike_c, humidity, wind_kph, wind_degree} = props;
  return (
    <>
      <div className='container d-flex align-items-center'>
        <div className="container d-flex justify-content-center mt-5 text-light">
        <div className="d-flex justify-content-center align-items-center row row-cols-md-3 mb-3 w-75 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary bg-dark text-light">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal" id="cityName">{city}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title" ><span><b id="temp1">{temp_c}</b></span><small className="text-muted fw-light"><span>&#8451;</span></small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Feels Like <span><b id="feels1">{feelslike_c}</b></span> <small className="text-muted fw-light"><span className="text-light">&#8451;</span></small></li>
                  <li>Humidity <span><b id="humidity1">{humidity}</b></span> <small className="text-muted fw-light"><span className="text-light">%</span></small></li>
                  <li>Wind Speed <span><b id="windS1"></b>{wind_kph}</span> <small className="text-muted fw-light"><span>km/h</span></small></li>
                  <li>Min/Max Temp <span><b id="minMaxT1"></b></span> <small className="text-muted fw-light"><span>&#8451;</span></small></li>
                  <li>Wind Degree <span><b id="windD1">{wind_degree}</b></span> <small className="text-muted fw-light"><span>&#176;</span></small></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default WeatherCard