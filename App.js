import React from 'react';
import { StyleSheet,Text,View,TouchableOpacity, Image, Dimensions} from "react-native";
import {AppNavigator} from "./Components/Home/HomeStack";

export default function App() {
  return(
    <AppNavigator/>
      // <View style={styles.container}>
      //   {/*<AppNavigator/>*/}
      //
      //   {/*<CardComponent/>*/}
      //   {/*---> call this*/}
      //   {/*<QuotesComponent/>*/}
      //
      //   {/*<HomeComponent/>*/}
      //   {/*<Navigator/>*/}
      // </View>
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
