import React from 'react';
import {View , FlatList,Dimensions,LogBox} from 'react-native';
//LogBox.ignoreAllLogs();
import Quotesstyle from "./QuotesStyle";
import QuotesImages from "./QuotesImages";
import QutoesRendering from "./QuotesRendering";

export default function QuotesComponent(){
  return(
    <View style={Quotesstyle.Qcontainer}>
      <FlatList
        data={QuotesImages}
        renderItem={({item}) => <QutoesRendering quotes= {item}/>}
        snapToAligment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
