import {StyleSheet} from 'react-native';


export default StyleSheet.create({

    viewTextStyling:{
        flexDirection:'column',
        justifyContent:'space-around',
    },

    textStyling:{
        fontFamily:'Chilanka-Regular',
        fontSize:18,
        fontWeight:'bold'
    },

    thumbnailImageStyling:{
        height:50,
        width:50,
        
    },

    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },

    imageStyle:{
        height:300,
        flex:1,
        width:null
    },
    buttonstyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginRight:5,
        marginLeft:5,
    },

    // textstyle:{
    //     color:'#2c3036',
    //     fontSize:20,
    //     fontFamily:'Chilanka-Regular'
    // },
    cardcontainer:{
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
      cardsectioncontainer:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    }


})