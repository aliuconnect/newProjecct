import React, {Component} from 'react'
import {View, ScrollView, Text,ImageBackground, Alert, Dimensions,Image,Button} from 'react-native'
import Input from './../../Components/Input';
import styles from './style'
import Buton from './../../Components/Button/'
import {Actions} from 'react-native-router-flux';
// import Input from '../Input';


const {width,height} = Dimensions.get('window');

export default class SignIn extends Component{

    constructor(props){
        super();

        this.state = {
            Email:'',
            Password:''
        }
    }

componentDidMount(){
    //Alert.alert("Will Mount Second Run");
}

_onPress(text){

    this.setState({Email:text})
    //Alert.alert(text);
}
pressMe(){

    Alert.alert("Button is Clicked");
}
render(){
    // Alert.alert("Render Third Run");
    return(
        
        
        <View style={{ height:height, width:width}}>

        <Text style={{textAlign:'center', marginTop:20, fontSize:30}}>Welcome to Login Page</Text>

        <Image 
        style={{width:100 , height:100 , alignSelf:'center'}}
        source={require('./../../../assets/images/logo.png')}/>

        <Input 
        textinputstyle={styles.textinputstyle}
        onChangeText = {text=>this._onPress(text)}
        placeholder = "Enter User Name"
        />

        <Input 
        textinputstyle={styles.textinputstyle}
        onChangeText = {text=>this._onPress(text)}
        placeholder = "Enter Password"
        secureTextEntry
        />

        <Text style={{color:'#fff' , fontSize:30}}>{this.state.Email}</Text>

        <Buton onPress={()=>Actions.signup()}>Sign In</Buton>
     
        </View>
       
    )}

}