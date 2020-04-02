import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components"
import MyButton from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    <MyButton />
        
    </View>
  );
}

export const Button = styled.button`
    background-color: teal;
    color: white;
    padding 20px;


`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
