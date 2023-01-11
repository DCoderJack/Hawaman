import './App.css';
import MoreWeatherCards from './components/MoreWeatherCards';
import Weather from './components/Weather';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import About from './components/About';
// import Contact from './components/Contact';


function App() {

  const apiKey = process.env.REACT_APP_WEATHER_API;

  return (
    <Router>
    <>
      <Routes>
        <Route exact path="/" element = {<><Weather apiKey={apiKey} mode={'dark'} weatherCity={'Mumbai'}/>
      <div className='container d-flex justify-content-center w-75'><MoreWeatherCards apiKey={apiKey} city={'Pune'} bg={'success'}/><MoreWeatherCards apiKey={apiKey} city={'New Delhi'} bg={'warning'}/><MoreWeatherCards apiKey={apiKey} city={'Bangalore'} bg={'danger'}/></div></>}></Route>
        {/* <Route exact path = '/about' element = {<About/>}></Route>
        <Route exact path = '/contact' element = {<Contact/>}></Route> */}
      </Routes>
    </>
    </Router>
  );
}

export default App;
