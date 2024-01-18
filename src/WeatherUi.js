import { Form, Input, Space } from 'antd'
import React from 'react'
import './weather.css'
import { useState } from 'react'

const { Search } = Input;


 const WeatherUi = () => {

  const [placeData, setPlaceData] = useState({});
  


  const onSearch = (value, _e, info) =>{



    console.log(value);
    
    
  

  getDataFromApi(value);
  
  } 

  const getDataFromApi=async(value)=>{

   const response =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=YOUR_API_KEY`).then(resp=>resp.json()).then(data=>data)

    setPlaceData(response);

  
      console.log("dataaa",placeData?.weather[0]?.main)

    
  }


  return (
    <div className='weather-component'>
      <h1>Weather App</h1>
      <Form>
      <Space direction="vertical">
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
        {placeData.main ? <>
        
        <h1>Temperature: {parseInt(placeData?.main?.temp)}°C</h1>
        <h1>Feels like: {parseInt(placeData?.main?.feels_like)}°C</h1>
        <h1>Highest : {parseInt(placeData?.main?.temp_max)}°C</h1>
        <h1>Lowest : {parseInt(placeData?.main?.temp_min)}°C</h1>
        <h1> {(placeData?.weather[0]?.main)}</h1>



        </>: <></>}

      </Space>
      </Form>
    </div>
  )
}


  

export default WeatherUi
