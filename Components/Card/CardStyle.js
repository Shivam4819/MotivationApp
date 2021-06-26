import {StyleSheet,Dimensions} from 'react-native';

const CardStyle= StyleSheet.create({
  container:{
    width:'100%',
  },
  cardText:{
    fontSize:30
  },
  card:{
    backgroundColor:'#fff',
    marginBottom:10,
    marginLeft:'1%',
    width:'96%',
    shadowColor:'black',
    shadowOpacity:2,
    elevation:5,
    shadowOffset:{
      width: 4,
      height:3
    }
  },
  cardimage:{
    width:'100%',
    height: 200,
    resizeMode:'cover'
  }
})

export default CardStyle;
