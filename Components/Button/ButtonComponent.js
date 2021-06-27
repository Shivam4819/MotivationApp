import React from 'react';
import {View, Text,Pressable} from 'react-native';
import Buttonstyle from "./ButtonStyle";
import CardComponent from "../Card/CardComponent";

export default function ButtonComponent(props){

  const presshandler = ()=>{

  //  navigation.navigate('CardComponent')
    navigation.push('CardComponent')
  }
  return(
    <View style={Buttonstyle.container}>
      <Pressable
       style={Buttonstyle.button}
       onPress={()=>props.navigation.navigate('Card')}
       // onPress={() =>
       //  console.warn('hey there')}
      >
        <Text style={Buttonstyle.text}> See More </Text>
      </Pressable>

    </View>
  )
}
