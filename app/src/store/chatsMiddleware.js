import { addMessage } from './chatsSlice.js'

export const addMessageWithThunk = (id, author, text) => (dispatch, getState) => {
    dispatch(addMessage({chat: id, author: author, text: text}));
    if (author !== "autobot") {
    setTimeout(() => dispatch(addMessage({chat: id, author: "autobot", text: "I'm watching you!!!!"})), 2000);
    }
    }
    