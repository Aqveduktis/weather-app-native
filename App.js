import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from "styled-components"
import {MyButton} from './components/Button';
import Weather from './components/Weather';
import { MyCompass } from './components/MyCompass';

export default function App() {
  return (
    <View style={styles.container}>
       <Image soure='./assets/Arrow.svg' style={{ width: 305, height: 159 }} /> 
      <MyCompass />
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
