import {Dimensions,StyleSheet} from 'react-native';


const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
    mainContainer: {

        width: width,
        height: height,
    },
buttonStyle:{

    backgroundColor:'#2c3036',
    alignSelf:'center',
   
},
textinputstyle:{
    //color:'red',
    fontSize:20,
    fontFamily:'Chilanka-Regular',
    color:'#2c3036',

}
});