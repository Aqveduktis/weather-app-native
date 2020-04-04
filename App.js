import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from "styled-components"
import {MyButton} from './components/Button';
import Weather from './components/Weather';
import { MyCompass } from './components/MyCompass';

// <MyCompass />
export default function App() {
  return (
    <View style={styles.container}>
      <View>
       <Image style={{ width:300, height:200 }} source={{uri:'./assets/splash.png'}} /> 
       </View>
      <Text>Open up App.js to start working on your app!</Text>
      <Weather />
    <MyButton />
        
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
