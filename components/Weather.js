import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';

// const secondApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityApi}&appid=2b9468766d0e54560c7e599762d2e80b`
export default function Weather() {

    const [forecast, setForecast] = useState([])
    const [done, setDone] = useState(false)
    const weatherapi = "https://api.openweathermap.org/data/2.5/forecast?q=Stockholm&appid=2b9468766d0e54560c7e599762d2e80b"

    useEffect(()=>{
        fetch(weatherapi)
        .then(res => res.json())
        .then(json => {
            setForecast(json.list)
            setDone(true)
            console.log("list",json.list)})
    },[])


    return (
        <View>
           
        <Text>from my component!</Text>
        {done && forecast.map((time, index, array)=>{
            if ((time.dt_txt).split(' ').includes("12:00:00")){
                return(
            <Text> {time.dt_txt} </Text>)}
        })}
        </View>
    )
  }
