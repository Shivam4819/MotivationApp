import React from 'react';
import { StyleSheet,Text,View,TouchableOpacity, Image, Dimensions} from "react-native";
import HomeComponent from "./Components/Home/HomeComponent";
import QuotesComponent from "./Components/Quotes/QutoesComponent";
import CardComponent from "./Components/Card/CardComponent";
import CardRendering from "./Components/Card/CardRendering";
export default function App() {
  return(
      <View style={styles.container}>
        {/*<TouchableOpacity style={styles.card}>*/}

        {/*  <Image style={styles.cardimage}  source={require('./Images/sample3.jpeg')}/>*/}
        {/*  <Text style={styles.cardText}> Card Title</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<CardComponent/>*/}
        <CardRendering/>
        {/*---> call this <QuotesComponent/>*/}
        {/*<HomeComponent/>*/}
      </View>
    );
}
 const styles= StyleSheet.create({
   container:{
     flex:1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent : 'center',
   }
 })
