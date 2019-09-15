import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import authReducer from 'reducers/authReducer';
import employeeReducer from 'reducers/employeeReducer';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    employees: employeeReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default rootReducer;