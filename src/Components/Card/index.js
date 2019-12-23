import React from 'react';
import {View} from 'react-native';
import Styles from './style'


const CardView = (props) => {

 return(

  <View style={props.cardcontainer}>
    {props.children}
  </View>

 )
}
export default CardView;