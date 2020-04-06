import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import styled from "styled-components/native"
import moment from "moment";




export const Card =({info}) => {
const thisDate = new Date(info.dt*1000)
const day = moment(thisDate).format("dddd");
const logo = 'https://openweathermap.org/img/wn/10d@2x.png'

//${info.icon}
    return (
    
        <View style = {styles.container}>
        <Text> {day} </Text>
        <Text> {Math.round(info.main.temp-274)}C </Text>
        <Text> {info.weather[0].description} </Text>
        <Image source = {{uri:`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}} style={{width:50, height:50}} />
        </View>
      
          
    );
  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      opacity: 0.7,
      alignItems: 'center',
      justifyContent: 'space-around',
      borderWidth: 1,
      borderColor: 'black',
     
    },
  })
