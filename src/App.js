import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const search = () => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca6176c23e01d00cb944f5f4ac19f723`
    )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(() => {
        setError(true);
      });
    setError(false);
  };
  return (
    <div className="main">
      <div>
        <h1 className="heading">Weather App</h1>
        <h3 style={{ textAlign: "center", color: "blueviolet" }}>
          Source: Openweathermap.org
        </h3>
        <h5 style={{ textAlign: "center", color: "black" }}>
          Developer: PRABHJOT ARORA
        </h5>
        <div className="search">
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter the city name...."
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button onClick={search}>Search</button>
        </div>
      </div>
      {error == false ? (
        data && (
          <div className="small-main">
            <div className="mainimg">
              <div className="imgcontainer">
                <img
                  src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  alt=""
                  srcset=""
                />
              </div>
              <h3> {data.weather[0].description}</h3>
            </div>
            <div className="info">
              <h3>Location: {data.name}</h3>
              <h3>Temperature: {data.main.temp}&deg;C</h3>
              <h3>Atmospheric Pressure: {data.main.pressure}</h3>
              <h3>Humidity: {data.main.humidity}</h3>
              <h3>Wind speed: {data.wind.speed}</h3>
              <h3>Visibility: {data.visibility}</h3>
              <h3>Latitude: {data.coord.lat}</h3>
              <h3>Longitude: {data.coord.lon}</h3>
              <h3>Country: {data.sys.country}</h3>
            </div>
          </div>
        )
      ) : (
        <h3 style={{ textAlign: "center", color: "red" }}>
          Enter the correct city name
        </h3>
      )}
    </div>
  );
}

export default App;
