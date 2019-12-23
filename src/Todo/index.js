import React, {Component} from 'react';
import {Text,Alert} from 'react-native';
import Card from './../Components/Card';
import CardSection from './../Components/CardSeaction'
import Input from './../Components/Input'
import Buton from './../Components/Button'
import Styles from './style'
import FlatList from './../Components/FlatList'
import {addTodo,removeTodo,editTodo,getEditedTodo} from './../Actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//import ContextMenu from 'react-context-menu'
//import prompt from 'react-native-prompt-android'
//import {Prompt} from 'react-native-prompt'
import DilogInput from 'react-native-dialog-input'

class Todo extends Component{
 constructor(props){
     super(props);

     this.todosArray=[],
    this.state={
        todoInput:'',
        promptVisible: false,
        stateId:'',
    
    }
   

 }

 addNewTodo = () => {
//   this.state.todosArray.unshift({

//     title: this.state.todoInput

//   })
    
if( this.state.todoInput.trim() !== '' ){
     this.todosArray.push(this.state.todoInput);

    this.props.addTodo({title: ""+this.todosArray})
    this.todosArray=[];


}
//this.props.addTodo({title: text})
    // this.setState({
    //     todosArray,
    //     todoInput:''
    // });



}

getTodoToEdit = (id) => {

    this.props.getEditedTodo({id:id})

    this.setState({
        promptVisible: true
    })

    
}

 editTodos = (text) => {
    //  Alert.alert("Text is: "+this.state.stateId)
    this.setState({promptVisible:false})
    this.props.editTodo({id:this.state.stateId, text:text})
    
    //  Alert.alert("Entered")

    // prompt(
    //     'Enter Your New Todo'
    //     [
    //         {text: 'Cancel', onPress: ()=> console.log('CancelPressed')},
    //         {text: 'Ok' , onPress:texts => console.log('Text is :', texts)}
    //     ],
    //     {
    //         cancelable: false,
    //         defaultValue: 'test',
    //         placeholder: 'placeholder'
    //     }
    // )
    // <Prompt
    // title="Say something"
    // placeholder="Start typing"
    // defaultValue="Hello"
    // visible={this.state.promptVisible}
    // onCancel={() => this.setState({ promptVisible: false, message: "You cancelled" })}
    // onSubmit={(value) => this.setState({ promptVisible: false, message: `You said "${value}"` })}/>

 }


render(){
    console.log(this.props)


    return(

        <Card cardcontainer={Styles.cardcontainer}>
            <CardSection cardsectioncontainer={Styles.cardsectioncontainer1}>
            
                <Input
                    textinputstyle={Styles.inputStyle}
                    onChangeText={(text)=>this.setState({todoInput:text})}
                    placeholder='Enter What You want to do'
                    placeholderTextColor="#2c3036"
                />
                
                <Buton 
                onPress={()=>this.addNewTodo()}
                buttonstyle={Styles.buttonstyle}>Add</Buton>

            </CardSection>

             <CardSection>
                        <FlatList
                         todoList={this.props.todoList}
                         onPress={this.props.removeTodo}
                         onLongPress={(id)=> this.editTodos(id)}
                         editTodo = {(id)=>this.getTodoToEdit(id)}
                        //  editTodo={()=> this.editTodos()}
                         />
                      
     
            </CardSection> 
            {
                this.state.promptVisible && this.props.selectedTodo && <DilogInput
                isDialogVisible={this.state.promptVisible}
                title={"Todo"}
                message={"Enter new Todo"}
                hintInput={"Enter New Todo Here"}
                initValueTextInput={this.props.selectedTodo.title}
                submitInput={ (inputText) => this.editTodos(inputText)}
                closeDialog={ () => this.setState({promptVisible:false})}
                />
            }           
        </Card>

    )
}
}

function mapStateToProps(state) {
    console.log("Todo list j: ",state.AddTodo.todos)
    
return {
todoList:state.AddTodo.todos, 
selectedTodo: state.AddTodo.selectedTodo  
    
}
}

function matchDispatchToProps(dispatch) {
return {
    addTodo: bindActionCreators(addTodo, dispatch),
    removeTodo: bindActionCreators((id) => removeTodo(id), dispatch),
    getEditedTodo:bindActionCreators(getEditedTodo , dispatch),
    editTodo: bindActionCreators(editTodo, dispatch),
} 
}
 export default connect (mapStateToProps,matchDispatchToProps)(Todo)