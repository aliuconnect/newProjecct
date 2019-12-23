import {StyleSheet,Dimensions} from 'react-native'

const {heigth , width} = Dimensions.get('window')
const itemWidth= (width -15 )/3
export default StyleSheet.create({
    
    containerpictures:{
        flex:1,
        minWidth: itemWidth, 
        maxWidth: itemWidth,
        //justifyContent:'space-around',
        margin:2,
        backgroundColor:'#dce0dd',
        height:100,
        borderWidth:1,
        borderColor:'#5f6361',
        alignItems:'center',
        justifyContent:'center',
    },

    infocardsection:{
        // flex:1,
        flexDirection:'row',
        height:150,
        margin:5,
        backgroundColor:'white',

    },

    picturescardsection:{
        backgroundColor:'white',
        margin:5,
    },
    profilepicture:{
        flex:1,
        flexDirection:'column',

        alignSelf:'flex-start',
        // alignItems:'center',
        justifyContent:'center',
    },
    inputcontainer:{
        flex:2.5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
       },

    inputstyling:{
        borderRadius:5,
        borderWidth:2,
        borderColor:'#626964',
        width:250,
    } ,

})