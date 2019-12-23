import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  container:{

    backgroundColor:'white',
    flexDirection:'row',
    

  },

  listView :{
      flex:3,
      flexDirection:'row',
      width:'100%',
      height:60,
      borderBottomWidth:1,
      borderBottomColor:'#c1c7c3',
      //justifyContent:'center',
      alignItems:'center'

  },

  itemtextstyling:{
    fontWeight:'bold',
    fontSize:15,
    paddingLeft:10,
    textAlignVertical:'center',
    justifyContent:'flex-end'
  },


})