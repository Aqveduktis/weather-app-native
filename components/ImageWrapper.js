import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import styled from "styled-components/native"

const Wrapper = styled.View`
justify-content: center;
width: 300px;
height: 300px;
background-color: skyblue;
color: white;
padding: 20px;
border-radius: 150px;
transform: ${props => props.transform}
`;

const MyImage = styled.Image`
width: 300px;
height: 100px;
padding 20px;
transform: rotate(270deg)
`;


export const ImageWrapper =(props) => {
    return (
      <Wrapper transform={`rotate(${props.degree}deg)`}>
   <MyImage source={require('../assets/arrow2.png')} />

        </Wrapper>
          
    );
  }