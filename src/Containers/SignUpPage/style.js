import {StyleSheet, Dimensions} from 'react-native';
const {height , width} = Dimensions.get('window');
export default StyleSheet.create({

container:{

    height:height , 
    width:width

},

textstyling: {

    fontSize:40,
    alignSelf:'center',
    marginTop:20,
    fontFamily:'Chilanka-Regular'
},
scrollableView:{
    paddingVertical: 20,
}


});