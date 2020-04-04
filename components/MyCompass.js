import React, {useState, useEffect} from 'react';
import { Magnetometer } from 'expo-sensors';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//{"z":4.5555,"y":8.3"x":8.2}
export const MyCompass = () => {
  let text = ""
  let window
  console.log("testing")
  Magnetometer.setUpdateInterval(1000);
  const [magnetData, setMagnetData] = useState({x:0, y:0, z:0})
  useEffect(()=>{
  Magnetometer.addListener(result => {
        setMagnetData(result)
        console.log(result)
        
        text = JSON.stringify(result)
        });

  },[]) 
  // let { x, y, z } = magnetData
  

  return (

      <View style={styles.sensor}>
        <Text>Magnetometer: no numbers now  </Text>
        <Text>{direction(calcAngleDegrees(magnetData.x, magnetData.y))}</Text>
  <Text>{round(magnetData.x)}</Text>
  <Text>{round(magnetData.y)}</Text>
  <Text>{round(magnetData.z)}</Text>

        <View style={styles.buttonContainer}>

        </View>
      </View>

  )
}
function round(n) {
    if (!n) {
      return 0;
    }
  
    return Math.floor(n * 100) / 100;
  }

  function calcAngleDegrees(x, y) {
    let angle = 0
    if (Math.atan2(y, x) >= 0) {
       angle = Math.atan2(y, x) * (180 / Math.PI);
    }
    else {
      angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
    }
  

  return Math.round(angle);
};

function direction (degree) {
  let words = ""
  if (degree >= 22.5 && degree < 67.5) {
    words = 'NE';
  }
  else if (degree >= 67.5 && degree < 112.5) {
    words = 'E';
  }
  else if (degree >= 112.5 && degree < 157.5) {
    words = 'SE';
  }
  else if (degree >= 157.5 && degree < 202.5) {
    words = 'S';
  }
  else if (degree >= 202.5 && degree < 247.5) {
    words = 'SW';
  }
  else if (degree >= 247.5 && degree < 292.5) {
    words = 'W';
  }
  else if (degree >= 292.5 && degree < 337.5) {
    words = 'NW';
  }
  else {
    words = 'N';
  }
  return words

}


  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'stretch',
      marginTop: 15,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
      padding: 10,
    },
    middleButton: {
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: '#ccc',
    },
    sensor: {
      marginTop: 15,
      paddingHorizontal: 10,
    },
  });