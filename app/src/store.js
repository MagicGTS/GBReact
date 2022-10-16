import { configureStore } from '@reduxjs/toolkit'
import chatsReducer from './store/chatsSlice.js'

export default configureStore({
  reducer: {
    chats: chatsReducer,
  },
})