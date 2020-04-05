import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from "styled-components"
import {MyButton} from './components/Button';
import Weather from './components/Weather';
import { MyCompass } from './components/MyCompass';



export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle = {styles.children} >
       <MyCompass />
      <Text>Open up App.js to start working on your app!</Text>
      <Weather />
    <MyButton />
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
    backgroundColor: 'pink',
    flexGrow: 1,
    justifyContent: 'space-between',

  },
});
