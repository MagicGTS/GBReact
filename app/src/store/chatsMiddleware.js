import { ref, onValue, set, getDatabase } from "firebase/database";
import { setMessage } from './chatsSlice.js'
import { firebase, db } from '../services/firebase.js';


export const addMessage = (action) => {
    const mes = ref(db, 'chats/' + action.id + '/messages');
    onValue(mes, (snapshot) => {
        debugger
        set(ref(db, 'chats/' + action.id + '/messages' + snapshot.size), {
            author: action.payload.author,
            text: action.payload.text,
        });
    });
}
export const addMessageWithThunk = (id, author, text) => (dispatch, getState) => {
    const mes = ref(db, 'chats/' + id + '/messages');
    onValue(mes, (snapshot) => {
        //debugger
        set(ref(db, 'chats/' + id + '/messages/' + snapshot.size), {
            author: author,
            text: text,
        });
        if (author !== "autobot") {
            setTimeout(() => {
                set(ref(db, 'chats/' + id + '/messages/' + snapshot.size+1), {
                    author: "autobot",
                    text: "I'm watching you!!!!",
                });
            }
                , 2000);
        }
    });

}

export const initMessageTracking = (id) => (dispatch) => {
    const messages = ref(db, 'chats/' + id + '/messages');
    onValue(messages, (snapshot) => {
        dispatch(setMessage({ chat: id, messages: snapshot.val() }));
    });
};
