import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import styled from "styled-components/native"
import moment from "moment";




export const Card =({info}) => {
const thisDate = Date(info.dt*1000)
const day = moment(thisDate).format("dddd");
const logo = 'https://openweathermap.org/img/wn/10d@2x.png'

//${info.icon}
    return (
      <View>
        <Text> {day} </Text>
        <Text> {Math.round(info.main.temp-274)}C </Text>
        <Text> {info.weather[0].main} </Text>
        <Image source = {{uri:{logo}}} style={{width:50, height:50}} />
        </View>
          
    );
  }