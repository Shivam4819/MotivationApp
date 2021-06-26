import React from 'react';
import {View , Text, FlatList} from 'react-native';
import Quotesstyle from "./QuotesStyle";
import HomeComponent from "../Home/HomeComponent";
import QuotesImages from "./QuotesImages";

export default function QuotesComponent(){
  console.log("vgybnj:", QuotesImages);
  return(
    <View style={Quotesstyle.Qcontainer}>
      <FlatList
        data={QuotesImages}
        renderItem={({item}) => <HomeComponent quotes= {item}/>}

      />
    </View>
  )
}
