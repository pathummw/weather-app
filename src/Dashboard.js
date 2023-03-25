import React ,{useEffect, useState} from 'react'
import SearchBar from './SearchBar'
import rain from './img/rain.jpg'
import snow from './img/snow.jpg'
import sunny from './img/sunny.jpg'
import styled from 'styled-components'

export default function Dashboard() {
    const Temp = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 300;
        font-size: 12em ;
    `
    const Desc = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
    `

    const API_key = '675fcfff307714a96aa30494fcb1aa0c';
    const[weatherData, setData] = useState([]);
    const[city_name, setCityName] = useState(['stockholm']);
    const[backgroundImg, setBackgroundImg] = useState(['rain']);

    useEffect(() => {
        
      if(city_name !== "") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`)
        .then((response) => { return response.json() })
        .then((data) => {
            setData(data);
            if(data && data.weather[0]?.description =="snow") {
                setBackgroundImg("snow")
            } else if(data && data.weather[0]?.description =="few clouds"){
                setBackgroundImg("rain")
            } else {
                setBackgroundImg("sunny")
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
      }
    }, [city_name]);

    const setSearchField = (city) => {
        setCityName(city)
    }
    
  return (
    <div style={{backgroundImage: `url(${backgroundImg === "rain" && rain || backgroundImg === "snow" && snow || backgroundImg === "sunny" && sunny})`,
        backgroundSize: "cover"
    }} className="container">
        <div className='search-bar'>
            <SearchBar setSearchField={setSearchField} />
        </div>
        <Temp>
            {weatherData && weatherData.main?.feels_like}
        </Temp>
        <Desc>
            {weatherData && weatherData.weather ? weatherData.weather[0].description : "No desc"} in {weatherData && weatherData.name}
        </Desc>
    </div>
    
  )
}
