import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        return firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        })
        .catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', error})
        })
    }
}

export const signOut = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        firebase.auth().signOut(
        ).then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password,
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                name: newUser.name,
                surname: newUser.surname,
                initials: newUser.name[0] + newUser.surname[0],
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'SIGNUP_ERROR', error })
        });
    }
}