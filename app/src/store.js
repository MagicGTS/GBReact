import { createStore, combineReducers, applyMiddleware } from 'redux'
import chatsReducer from './store/chatsSlice.js'
import gistsReducer from './store/gistsSlice.js'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, combineReducers({
  chats: chatsReducer,
}));

export const store = createStore(
  combineReducers({
    chats: persistedReducer,
    gists: gistsReducer
  }),
  composedEnhancer
)
export const persistor = persistStore(store);
