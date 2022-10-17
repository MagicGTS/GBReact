import { createSlice } from "@reduxjs/toolkit";

export const chatsSlice = createSlice({
  name: "chats",
  initialState: {
/*     0: {
      name: "chat1s",
      messages: [],
    },
    1: {
      name: "chat2",
      messages: [],
    }, */
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.hasOwnProperty(action.payload.chat)) {
        state[action.payload.chat].messages = [
          ...state[action.payload.chat].messages,
          {
            text: action.payload.text,
            author: action.payload.author,
          },
        ];
      }
      return state;
    },
    delMessage: (state, action) => {
      if (state.hasOwnProperty(action.payload.chat)) {
        state[action.payload.chat].messages = state[action.payload.chat].messages.filter((item, index) => index !== action.payload.index)
      }
      return state;
    },
  },
});

export function getMessages(id) {
  return (state) => state.chats[id].messages
}

export function getMessagesByAuthor(id, author) {
  return (state) => state.chats[id].messages.filter(item => item.author === author)
}
export const { addMessage, delMessage } = chatsSlice.actions

export default chatsSlice.reducer