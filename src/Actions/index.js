
export function addTodo (props)  {
    console.log("Title Action " +props.title);
  
    return({
        type:'ADD_TODO',
        payLoad: props.title,  
    
    })
}

export function removeTodo(id) {

    console.log('ID Action : ', id);
    
    return({
   
        type:'REMOVE_TODO',
        payload: id
  
    })
    
    
}

export function editTodo(props) {

    console.log('ID Action : ', props);
    
    return({
   
        type:'EDIT_TODO',
        payloadId: props.id,
        payloadText:props.text
  
    })
    
    
}
export function getEditedTodo(id) {

    console.log('ID Action : ', id);
    
    return({
   
        type:'GET_EDITED_TODO',
        payloadId: id,
  
    })
    
    
}

export function addFirend(){
    //console.log("Actions of: ",props);
    return({
        type: 'ADD_FRIEND',
    })
}

export function removeFirend(props){
    
    
    return({
        type: 'REMOVE_FRIEND',
        payload: props.id,
    })
}
