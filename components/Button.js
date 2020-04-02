import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components"

export default function MyButton() {
    return (
        <Button 
        title="Press me"
        onPress={() => alert('Hi!')} >
          Hello world
        </Button>
          
    );
  }
  
 const Button = styled.button`
      background-color: teal;
      color: white;
      padding 20px;
  
  
  `
