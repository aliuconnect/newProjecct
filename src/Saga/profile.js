import {delay,takeLatest,put, call} from 'redux-saga/effects';
import {getList} from './API'

// function* addFriendAsync(action) {
//     console.log('Watcher action: ', action)

// try {
//     yield delay(4000);
//     yield put({
//         type:'ADD_FRIEND_ASYNC',
//         payload: action.payload,
//     })

// } catch (e) {
//     console.log('Error : ', e);
    
// }
    
// }

// export function* watchAddFriend() {
//     yield takeLatest('ADD_FRIEND' , addFriendAsync)
// }


// function* removeFriendAsync(action) {
//     console.log('Watcher action: ', action)

// try {
//     //yield delay(4000);
//     yield put({
//         type:'REMOVE_FRIEND_ASYNC',
//         payload: action.payload,
//     })

// } catch (e) {
//     console.log('Error : ', e);
    
// }
    
// }

// export function* watchRemoveFriend() {
//     yield takeLatest('REMOVE_FRIEND' , removeFriendAsync)
// }


function* showListAsync() {

    try {

        yield put({type: "REQUEST_SOMTHING"})

        const response = yield call(getList);
        console.log(response)
    if(response.isError) {
        yield put({
            type:'SHOW_ActivityIndicator_ASYNC',
            payload:false,
            message:"Something Went Wrong!",

        })
            return;
    }
    const recieveList = [...response.data]
    console.log("Recieved List",recieveList)
        
    yield put({
        type:'ADD_FRIEND_ASYNC',
        payload: recieveList,
        visibility:false,
        message:null,
    });

    }
    catch(error){
        console.log(error.message, "eroor")
        yield put({
            type:'SHOW_ActivityIndicator_ASYNC',
            payload:false,
            message:"Something Went Wrong!",
    
        })
    }

    
}

export function* watchShowList() {
    
    yield takeLatest('ADD_FRIEND' ,showListAsync)
}

