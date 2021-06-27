import {StyleSheet,Dimensions} from 'react-native';

const Buttonstyle= StyleSheet.create({
  container:{
    width:'100%',
    padding:10,
  },
  button:{
    backgroundColor:'grey',
    height: 40,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:16,
    fontWeight:'900',
    textTransform:'uppercase',
  }
})

export default Buttonstyle;
