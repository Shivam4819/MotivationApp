import React from 'react';
import {View , Text, FlatList} from 'react-native';
import CardList from "./CardList";
import CardStyle from "./CardStyle";
import CardRendering from "./CardRendering";
export default function CardComponent(props){
  console.log(props)
  return(
    <View style={CardStyle.container}>
      <FlatList
        data={CardList}
        renderItem={({item}) => <CardRendering card={item} props={props}/>}
      />
    </View>
  )
}
