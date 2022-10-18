import { getAuthRequest, getAuthSuccess, getAuthFailure } from './userSlice.js'
import { initChats } from './chatsSlice.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref, onValue} from "firebase/database";
import { firebase, db } from '../services/firebase.js';
export const getAuthUserThunk = (email, password) => async (dispatch) => {
    dispatch(getAuthRequest());
    const auth = getAuth(firebase);
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            dispatch(getAuthSuccess(userCredential.user));
            const chats = ref(db, 'chats');
            onValue(chats, (snapshot) => {
                dispatch(initChats(snapshot.val()));
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            dispatch(getAuthFailure(error.message));
            // ..
        });
};