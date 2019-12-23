import React from 'react'
import { TouchableOpacity,Text} from 'react-native'
import styles from './style'


const btn = (props) => {
return (
    
    <TouchableOpacity onPress={ () => props.onPress() } style={props.buttonstyle}>
    <Text style = {styles.textstyle}>{props.children}</Text>
    </TouchableOpacity>
    
   

);
};
export default btn;