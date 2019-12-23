import {StyleSheet, Dimensions} from 'react-native'

const {height,width} = Dimensions.get('window')
export default StyleSheet.create({

    buttonstyle:{
        fontWeight:'bold',
        height:55,
        width:200,
        alignSelf:'center',
        backgroundColor:'#fff',
        borderRadius:5,
        justifyContent: 'center',
        borderWidth:1,
        borderColor:'#007aff',
        marginRight:5,
        marginLeft:5,
        marginTop:20,
    },

    inputStyle:{
        marginTop:15,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginRight:5,
        marginLeft:5,

    },

    cardcontainer:{
        
        flexDirection:'column',
        height:null,
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0 , height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10  
      },

      cardsectioncontainer1:{
        textAlignVertical:'center',
        marginTop:10,
        padding:5,
        backgroundColor:'white',
        borderColor:'#ddd',
        height:'auto',
        position:'relative',
        marginBottom:10
      },

})