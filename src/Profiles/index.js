import React,{Component} from 'react'
import {View,FlatList,Text,TouchableOpacity,Alert, ToastAndroid,YellowBox,ActivityIndicator} from 'react-native'
import Card from './../Components/Card'
import {delay} from 'redux-saga/effects'
import CardSection from './../Components/CardSeaction'
import Styles from './style'
import Input from './../Components/Input';
import {addFirend,removeFirend} from './../Actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';


class Profiles extends Component{
    constructor(props){
        super(props);
        
        this.state={
            textInput:'',
            showLoading:false,
            toastMessage:null,
            
        }
    }

    addFrinds = ()=>{
        console.log();
        
        this.setState({toastMessage:this.props.message});
        //this.setState({showLoading:this.props.visibility})
        console.log("before: ",this.state.toastMessage);
        //this.props.addFirend({friendName:this.state.textInput})
        this.setState({showLoading:this.props.visibility})
        this.props.addFirend()
        this.setState({textInput:''});
        console.log("after: ",this.state.toastMessage);
        
        
    }
    // componentDidUpdate(){
        
    //     this.setState({toastMessage:this.props.message})
    //     console.log("hahbdhab: ", this.state.toastMessage);
    // }



showAlert = ()=>{
    Alert.alert("ALertshow")
}

showMenu = () => {
    this.setState({showPopMenue:true})
}

    render(){
        
        YellowBox.ignoreWarnings(['Remote debugger'])
        
        return(

            <Card>
                <CardSection cardsectioncontainer={Styles.infocardsection}>

                    <View style={Styles.profilepicture}>
                        <View style={{
                            margin:5,
                            borderRadius:80,
                            borderWidth:1,
                            borderColor:'#5f6361',
                            flex:2.8, 
                            backgroundColor:'#dce0dd',
                            justifyContent:'center',
                            alignItems:'center'}}>
                            <Text>Ali</Text>  
                        </View>

                        <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
                            <Text>Ali Muhammadi</Text>
                        </View>

                    </View>
                    <View style={Styles.inputcontainer}>
                            <View >
                                <Input
                                onChangeText={(text)=>this.setState({textInput:text})}
                                textinputstyle={Styles.inputstyling}
                                placeholder="Enter Your Friends Name"
                                />
                            </View>
                            <TouchableOpacity 
                            onPress={()=> this.addFrinds()}
                            
                            style={{
                                borderRadius:5,
                                borderWidth:1,
                                borderColor:'#5f6361',
                                marginLeft:10,
                                backgroundColor:'#dce0dd',
                                width:100,
                                justifyContent:'center',
                                alignItems:'center',
                                height:45,
                            }}
                                >
                            <Text style={{fontWeight:'bold',fontSize:20}}>Add</Text>
                            </TouchableOpacity>
                         
                    </View>

                </CardSection>
                <CardSection cardsectioncontainer={Styles.picturescardsection}>
                    <FlatList
                    numColumns={3}
                    data={this.props.friendList}
                    renderItem={({item})=>{
                        return(
                            <View style={Styles.containerpictures}>
                               <TouchableOpacity
                               onLongPress={()=>this.props.removeFirend({id:item.id})}
                               >
                                <Text>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    />
                </CardSection>
               { (this.props.visibility ) ? <ActivityIndicator 
                style={{justifyContent:'center' , alignItems:'center', marginTop:100,}}
                
                size='large'/> : this.props.message !==null 
                && ToastAndroid.show(this.props.message , ToastAndroid.LONG) }
            </Card>

        )
    }
}

function mapStateToProps(state){
    console.log("State hai: " ,state.AddFriend.friends );
    console.log("Visibility hai: " ,state.AddFriend.visibility);
    console.log("Error Message: ", state.AddFriend.message);
    
    
    return{
        friendList:state.AddFriend.friends,
        visibility:state.AddFriend.visibility,
        message:state.AddFriend.message,
    }

}

function matchDispatchToProps(dispatch) {

    return{
        addFirend:bindActionCreators(addFirend , dispatch),
        removeFirend:bindActionCreators(removeFirend , dispatch),
    }  
}

export default connect(mapStateToProps,matchDispatchToProps)(Profiles)