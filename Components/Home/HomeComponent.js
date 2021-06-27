import React from 'react';
import {Text,View,ImageBackground, Button} from 'react-native';
import style from './HomeStyles';

export default function HomeComponent(props) {

  return(
    <View style={style.HomeContainer}>
      <ImageBackground
        source={require('../../Images/NewHome.jpg')}
        style={style.image}
      />
      <View style={style.titles}>
        <Text style={style.title}>Motivation</Text>
      </View>
      <View style={style.buttonContainer}>

        <Button
          title="Next Page"
          onPress={()=>props.navigation.navigate('Card')}/>
      </View>
    </View>
  );
}
