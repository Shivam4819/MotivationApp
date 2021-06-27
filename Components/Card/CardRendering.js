import React,{PureComponent} from 'react';
import {StyleSheet,Text,View,TouchableOpacity, Image, Dimensions,Pressable,Button} from 'react-native';
import CardStyle from "./CardStyle";
import CardComponent from "./CardComponent";
export default function CardRendering({card, props}){
  const {image,name}=card
  return(
    <View >
      <TouchableOpacity
        style={CardStyle.card}
        onPress={()=> props.navigation.navigate('Quotes')}
      >
        <Image
          style={CardStyle.cardimage}
          source={image}
          />
        <Text style={CardStyle.cardText}> {name}</Text>
      </TouchableOpacity>

    </View>
  )
}

