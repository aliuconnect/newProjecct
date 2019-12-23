import React from 'react';
import{
    View,
    TextInput,
    Keyboard
    }from 'react-native';
import styles from './style';
    
    
    
    const Inputtxt = props => {
        return (
    
        
            <TextInput
        
            style={props.textinputstyle}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            placeholderTextColor={props.placeholderTextColor}
            onBlur={Keyboard.dismiss}
            />
        
        );
    };
    
    export default Inputtxt;