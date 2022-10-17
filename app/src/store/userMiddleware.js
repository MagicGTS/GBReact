import { getAuthRequest, getAuthSuccess, getAuthFailure } from './userSlice.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from '../services/firebase.js';
export const getAuthUserThunk = (email, password) => async (dispatch) => {
    dispatch(getAuthRequest());
    debugger;
    const auth = getAuth(firebase);
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            dispatch(getAuthSuccess(userCredential.user));
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            dispatch(getAuthFailure(error.message));
            // ..
        });
};