import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// =============***< (PUT) UPDATE USER ACCESS LEVEL >***================
function* updateAccess (){
    // PUT 
    // SUPER ADMIN ONLY
    // will send a request to the admin router to change a users access level, acting in a way like a promotion

}

function* superSaga(){
    yield takeLatest('UPDATE_USER_ACCESS', updateAccess);
}

export default superSaga;