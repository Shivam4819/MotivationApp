import {StyleSheet,Dimensions} from 'react-native';

const CardStyle= StyleSheet.create({
  container:{
    width:'100%',
    marginTop:10,
  },
  cardText:{
    fontFamily:'cursive',
    fontSize:18,
    textAlign:'right',
    padding:10,
    fontWeight:'900',

  },
  card:{
    backgroundColor:'#fff',
    marginBottom:10,
    marginLeft:'2%',
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
    flex:1,
    width:'100%',
    height: 200,
    resizeMode:'contain',
    backgroundColor: 'black',
  }
})

export default CardStyle;
