
const initialState = {
    todos: [
        {
            id:  1,
                        title: "Go to gym",
                         done:false,
        },
        {
            id:  2,
                        title: "Go to home",
                         done:false,
        },
    ],
    selectedTodo: null
}

const todo = (state = initialState , action)=>{
    console.log('Actions addtodo: ', action);
    

    switch (action.type) {
        case 'ADD_TODO':
                console.log("ADDtodo: ",state)
     
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        title:action.payLoad,
                         done:false,
                    }
                ]
            };

        case "GET_EDITED_TODO":
            
                const selectedTodo = state.todos.find(item => item.id === action.payloadId.id);
                console.log("Selected Todo: ", selectedTodo );
                
                return{
                ...state,
                selectedTodo
            }
            
            


        case "REMOVE_TODO":
            const index = state.todos.findIndex(item => item.id === action.payload)
            const todoSate = [...state.todos]
            todoSate.splice(index, 1)
            return{
                ...state,
                todos: [...todoSate]
            }
        
        case "EDIT_TODO":

            const newState = state.todos
            newState.find(i => i.id === state.selectedTodo.id).title = action.payloadText;
            return {
                ...state, 
                todos: [...newState],
                selectedTodo: null
            }        
    
        default:
            break;
    }

    return state;

}
export default todo;