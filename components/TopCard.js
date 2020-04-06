import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import styled from "styled-components/native"
import moment from "moment";

const CardText = styled.Text`
font-size: 20px;
color: white;

`



export const TopCard =({info}) => {
const thisDate = new Date(info.dt*1000)
const day = moment(thisDate).format('hh:mm a');
const logo = 'https://openweathermap.org/img/wn/10d@2x.png'

//${info.icon}
    return (
    
        <View style = {styles.container}>
            <View>
        <CardText> {day} </CardText>
        <CardText> {Math.round(info.main.temp-274)}C </CardText>
        </View>
        <View>
        
        <Image source = {{uri:`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}} style={{width:75, height:75}} />
        <CardText> {info.weather[0].description} </CardText>
        </View>
        </View>
      
          
    );
  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'black',
      opacity: 0.8,
      alignItems: 'center',
      justifyContent: 'space-around',
      borderWidth: 1,
      borderColor: 'black',
     
    },
  })