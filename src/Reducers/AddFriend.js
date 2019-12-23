
const initialState = {
    friends:[],
    visibility:false,
    message:null,
}

const frindsList = (state = initialState , action)=>{
console.log("Action addfriend: ",action);

    switch (action.type) {
        case 'REQUEST_SOMTHING': 
        return {
            ...state,
            visibility:true,
            message: null
        }
        case 'ADD_FRIEND_ASYNC':
            console.log("Activity Indicator 1:",action.visibility)
            return{
                ...state,
                friends: state.friends.concat(action.payload),
                visibility:action.visibility,
                message:action.message
            }

        case 'REMOVE_FRIEND_ASYNC':
            const index = state.friends.findIndex(item => item.id === action.payload);
            const friendState = [...state.friends];

            friendState.splice(index , 1);
            return{
                ...state , 
                friends:[...friendState],
            }

        case 'SHOW_ActivityIndicator_ASYNC':
            console.log("Activity Indicator 2: ", action.payload)
            return{
                ...state ,
                visibility:action.payload,
                message:action.message,
            }


    
        default:
            break;
    }
    return state;

}
export default frindsList;