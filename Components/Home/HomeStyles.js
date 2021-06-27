import {StyleSheet,Dimensions} from 'react-native';

const style= StyleSheet.create({
  HomeContainer:{
    width:'100%',
    height: Dimensions.get('window').height,
  },

  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    position:'absolute',
  },
  titles:{
    marginTop:'25%',
    width: '100%',
    alignItems: 'center',
  },
  title:{
    fontSize:50,
    fontWeight:'900',
  },
  buttonContainer:{
    position: 'absolute',
    bottom:50,
    width: '100%',
  }

})

export default style;
