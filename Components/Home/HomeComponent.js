import React from 'react';
import {StyleSheet,Text,View,ImageBackground} from 'react-native';
import style from './HomeStyles';

export default function HomeComponent(props) {
  console.log('hiiiiiiiiiii')
   const {image} = props.quotes
   console.log(props)
  return(
    <View style={style.HomeContainer}>
      <ImageBackground
        // source={require('../../Images/NewHome.jpg')}
       source={image}
        style={style.image}
      />
      <View style={style.titles}>
        <Text style={style.title}>Motivation</Text>
      </View>
      </View>
  );
}
