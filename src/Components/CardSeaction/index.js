import React from 'react';
import {View} from 'react-native';

const CardSeaction = (props) => {
    return(
        <View style={props.cardsectioncontainer}>
            {props.children}
        </View>
    )
}
export default CardSeaction;