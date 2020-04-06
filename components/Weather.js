import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import moment from "moment";

import styled from "styled-components"
import {Card} from './Card'
// const secondApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=2b9468766d0e54560c7e599762d2e80b`
// const secondApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityApi}&appid=2b9468766d0e54560c7e599762d2e80b`



export const Weather =() => {

    const [forecast, setForecast] = useState([])
    const [today, setToday] = useState({})
    const [done, setDone] = useState(false)
    const weatherapi = "https://api.openweathermap.org/data/2.5/forecast?q=Stockholm&appid=2b9468766d0e54560c7e599762d2e80b"
    //const todayApi = `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=2b9468766d0e54560c7e599762d2e80b`

    useEffect(()=>{
        fetch(weatherapi)
        .then(res => res.json())
        .then(json => {
            setForecast(json.list)
            setToday(json.list[0])
            setDone(true)
            console.log("list",json.list)
            })
    },[weatherapi])



    return (
        <View>
           {done && <Text>Today: {today.dt_txt} weather: {today.weather[0].main} Today: </Text>}
        <Text>from my component!</Text>
        <WeatherWeek>
        {done && forecast.map((time)=>{
            if ((time.dt_txt).split(' ').includes("12:00:00")){
                return(
                    <Card info={time} />
                )}
        })}
    
        </WeatherWeek>
        </View>
    );
  }
  
  const WeatherWeek = styled.View`
     height: 350px;
     width: 350px;
     margin: 16px auto;      
  `



//  const WeatherText = styled.Text`
//     color: #D7C49EFF;
//     background-color: #343148FF;
//     font-size: 24px;
 
//  `


