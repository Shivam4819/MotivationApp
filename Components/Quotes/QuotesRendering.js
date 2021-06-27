import React from 'react';
import {View,ImageBackground,Image} from 'react-native';
import Quotesstyle from "./QuotesStyle";

export default function QutoesRendering(props) {
  const {image} = props.quotes
  return(
    <View style={Quotesstyle.HomeContainer}>
      <ImageBackground
        source={image}
        style={Quotesstyle.image}
      />
      <View style={Quotesstyle.titles}>
      </View>
    </View>
  );
}
