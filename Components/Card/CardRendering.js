import React from 'react';
import {View , Text, FlatList} from 'react-native';
import CardList from "./CardList";
import CardStyle from "./CardStyle";
import CardComponent from "./CardComponent";
export default function CardRendering(){
  return(
    <View style={CardStyle.container}>
      <FlatList
        data={CardList}
        renderItem={({item}) => <CardComponent card={item}/>}
      />
    </View>
  )
}
