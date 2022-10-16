import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store,persistor } from './store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
const strictMode = process.env.NODE_ENV === 'production';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  (strictMode && (
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
      <PersistGate persistor={persistor} >
        <App />
        </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )) || (
    <BrowserRouter>
    <Provider store={store}>
    <PersistGate persistor={persistor} >
      <App />
      </PersistGate>
      </Provider>
    </BrowserRouter>
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
