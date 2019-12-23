import React , {Component} from 'react';
import {Text,ImageBackground,ToastAndroid,Alert,ScrollView} from 'react-native';
import Input from './../../Components/Input'
import Buton from './../../Components/Button'
import Styles from './style'
import {Actions} from 'react-native-router-flux';

export default class SignUp extends Component {

    constructor (props){
        super()

        this.state = {
            fullName:'',
            email:'',
            age:'',
            mobileNumber:''

        }

    }

_onPress(){
 
    const {fullName,email,age,mobileNumber} = this.state;
   
//ToastAndroid.show(text , ToastAndroid.LONG)
// ToastAndroid.showWithGravity(
//     text,
//     ToastAndroid.SHORT,
//     ToastAndroid.CENTER,
//   );
// ToastAndroid.showWithGravityAndOffset(
//     text+this.state.fullName,
//     ToastAndroid.LONG,
//     ToastAndroid.BOTTOM,
//     25,
//     50,
//   );
//<Text>{`Hi ${this.state.fullName} Your Email is ${this.state.email} your mobile# ${this.state.mobileNumber} and age is ${this.state.age}`}</Text>
// Alert.alert(`Hi ${this.state.fullName} Your Email is ${this.state.email} your mobile# ${this.state.mobileNumber} and age is ${this.state.age}`)

}


render(){

    return(
        <ScrollView style={Styles.scrollableView}>
        <ImageBackground
        style={Styles.container}
        source={require('./../../../assets/images/background.jpg')}
        >
        
<Text style={Styles.textstyling}>Sign Up</Text>       
<Input
onChange = {text => this.setState({fullName:text})}
placeholder ="Enter Your FullName"
/>

<Input
onChange = {text => this.setState({email:text})}
placeholder="Enter Your Email"/>

<Input
onChange = {text => this.setState({age:text})}
placeholder="Enter Your Age"
/>
<Input
onChange = {text => this.setState({mobileNumber:text})}
placeholder="Enter Your Mobile #"
/>

<Buton onPress={()=> Actions.home() }>Sign Up</Buton>
<Text>{`Hi ${this.state.fullName} Your Email is ${this.state.email} your mobile# ${this.state.mobileNumber} and age is ${this.state.age}`}</Text>

</ImageBackground>
</ScrollView>
)
}
}


