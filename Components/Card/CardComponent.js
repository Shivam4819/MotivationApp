import React,{PureComponent} from 'react';
import {StyleSheet,Text,View,TouchableOpacity, Image, Dimensions} from 'react-native';
import CardStyle from "./CardStyle";
import CardRendering from "./CardRendering";
export default function CardComponent(props){
  const {image}=props.card
  console.log(image)
  return(
    <View >
      <TouchableOpacity style={CardStyle.card}>

        <Image
          style={CardStyle.cardimage}
          source={image}
          // source={require('../../Images/sample3.jpeg')}
          />
        <Text style={CardStyle.cardText}> Card Title</Text>
      </TouchableOpacity>

    </View>
  )
}

