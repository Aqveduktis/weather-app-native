import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components"
// const secondApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=2b9468766d0e54560c7e599762d2e80b`
// const secondApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityApi}&appid=2b9468766d0e54560c7e599762d2e80b`
export default function Weather() {

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
    },[])



    return (
        <View>
           {done && <WhiteText>Today: {today.dt_txt} weather: {today.weather[0].main} Today: </WhiteText>}
        <Text>from my component!</Text>
        {done && forecast.map((time, index, array)=>{
            if ((time.dt_txt).split(' ').includes("12:00:00")){
                return(
                <Text key={time.dt}>time: {time.dt_txt} weather:{time.weather[0].main} temperature: {Math.round(time.main.temp-274)} </Text>)}
        })}
        </View>
    );
  }
  
 const WhiteText = styled.Text`
    background-color: #222;
    font-size: 32px;
    color: white;
    text-shadow: 1px 1px 2px black;
 `;

