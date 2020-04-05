import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import styled from "styled-components"
import {MyButton} from './components/Button';
import Weather from './components/Weather';
import { MyCompass } from './components/MyCompass';



export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle = {styles.children} >
      <ImageBackground source={ {uri:'https://upload.wikimedia.org/wikipedia/commons/6/6a/10_Sprinklers_in_vineyard_-_Trentino-Alto_Adige%2C_Italy.jpg',} } style={styles.image}>
       <MyCompass />
      <Text>Open up App.js to start working on your app!</Text>
      <Weather />
    <MyButton />
    </ImageBackground>
    </ScrollView>
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
  children: {
    height: 1000,
    width: 400,
    flexGrow: 1,
    justifyContent: 'space-between',

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    
  },
});
