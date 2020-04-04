import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styled from "styled-components/native"

const StyledButton = styled.TouchableOpacity`
background-color: teal;
color: white;
padding 20px;
`;


export const MyButton =() => {
    return (
      <View>
        <StyledButton 
        title="Hello world"
        onPress={() => alert('Hi!')} >
         <Text> Hello world</Text>
        </StyledButton>
        </View>
          
    );
  }
  

  
