import { createStore, combineReducers, applyMiddleware } from 'redux'
import chatsReducer from './store/chatsSlice.js'
import gistsReducer from './store/gistsSlice.js'
import userReducer from './store/userSlice.js'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['gists','user','chats']
}
const persistedReducer = persistReducer(persistConfig, combineReducers({
  chats: chatsReducer,
  gists: gistsReducer,
  user: userReducer
}));

export const store = createStore(persistedReducer, composedEnhancer)
export const persistor = persistStore(store);
