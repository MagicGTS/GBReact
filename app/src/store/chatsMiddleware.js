import { addMessage } from './chatsSlice.js'
import { db } from '../services/firebase.js';

export const addMessageWithThunk = (id, author, text) => (dispatch, getState) => {
    dispatch(addMessage({ chat: id, author: author, text: text }));
    if (author !== "autobot") {
        setTimeout(() => dispatch(addMessage({ chat: id, author: "autobot", text: "I'm watching you!!!!" })), 2000);
    }
}
const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];
    snapshot.forEach((mes) => {
        messages.push(mes.val());
    });
    return { chatId: snapshot.key, messages }
}

export const initMessageTracking = () => (dispatch) => {
    db.ref("messages").on("child_changed", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            //type: CHANGE_MESSAGES,
            payload,
        });
    });
    db.ref("messages").on("child_added", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            //type: CHANGE_MESSAGES,
            payload,
        });
    });
};
