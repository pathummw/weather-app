import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import rain from "./img/rain.jpg";
import snow from "./img/snow.jpg";
import sunny from "./img/sunny.jpg";
import thunder from "./img/thunder.jpg";
import drizzle from "./img/drizzle.jpg";
import atmosphere from "./img/atmosphere.jpg";
import cloudy from "./img/cloudy.jpg";
import clear from "./img/clear.jpg";
import styled from "styled-components";

export default function Dashboard() {
  const Temp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    font-size: 12em;
  `;
  const Desc = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  `;

  const API_key = "675fcfff307714a96aa30494fcb1aa0c";
  const [weatherData, setData] = useState([]);
  const [city_name, setCityName] = useState(["stockholm"]);
  const [backgroundImg, setBackgroundImg] = useState(["rain"]);

  useEffect(() => {
    if (city_name !== "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
          let num = 0;
          if (data && data.weather[0]?.id) {
            num = Number(String(data.weather[0]?.id)[0]);
          }

          switch (num) {
            case 2:
              setBackgroundImg("thunder"); //Thunder
              break;
            case 3:
              setBackgroundImg("drizzle"); //Drizzle
              break;
            case 5:
              setBackgroundImg("rain"); //Rain
              break;
            case 6:
              setBackgroundImg("snow"); //Snow
              break;
            case 7:
              setBackgroundImg("atmosphere"); //Atmosphere
              break;
            case 8:
              setBackgroundImg("clear"); //Clear
              break;
            case 9:
              setBackgroundImg("cloudy"); //Clouds 80x
              break;
            default:
              setBackgroundImg("sunny");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [city_name]);

  const setSearchField = (city) => {
    setCityName(city);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${
          (backgroundImg === "thunder" && thunder) ||
          (backgroundImg === "drizzle" && drizzle) ||
          (backgroundImg === "rain" && rain) ||
          (backgroundImg === "snow" && snow) ||
          (backgroundImg === "atmosphere" && atmosphere) ||
          (backgroundImg === "thunder" && thunder) ||
          (backgroundImg === "cloudy" && cloudy) ||
          (backgroundImg === "clear" && clear) ||
          (backgroundImg === "sunny" && sunny)
        })`,
        backgroundSize: "cover",
      }}
      className="container"
    >
      <div className="search-bar">
        <SearchBar setSearchField={setSearchField} />
      </div>
      <Temp>
        {weatherData && Math.round(weatherData.main?.feels_like)} {"\u00B0"} C
      </Temp>
      <Desc>
        {weatherData && weatherData.weather
          ? weatherData.weather[0].description
          : "No desc"}{" "}
        in {weatherData && weatherData.name}
        {weatherData && weatherData.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          />
        )}
      </Desc>
    </div>
  );
}
