import {all, fork} from 'redux-saga/effects'
import {watchShowList} from './profile'

export default function* rootSaga() {

    yield all ([
        // fork (watchAddFriend),
        // fork (watchRemoveFriend),
        fork (watchShowList),
    ])
    
}
