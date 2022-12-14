import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Home/Home.js";
import Profile from "./Profile/Profile.js";
import Chats from "./Chats/Chats.js";
import ChatList from "./ChatList/ChatList.js";
import LoginForm from "./LoginForm/LoginForm.js";
import GistsList from "./GistsList/GistsList.js";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import { selectUser, selectUserError, selectUserLoading, selectIsAuth } from './store/userSlice.js'
import { ThemeContext, themes } from "./Theme";
import { useSelector, useDispatch } from 'react-redux'
//import Grid from '@mui/material/Grid'; // Grid version 1

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<ProtectedRoute ><Profile /></ProtectedRoute>} />
            <Route path="chats" element={<ChatList />}>
              <Route path=":id" element={<Chats />} />
              <Route path=":id/:author" element={<Chats />} />
            </Route>
            <Route path="gistslist" element={<GistsList />} />
              {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
              <Route path="*" element={<NoMatch />} />
              <Route path="login" element={<LoginForm />} />
            </Route>
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}
function Layout() {
  const theme = useContext(ThemeContext);
  const user = useSelector(selectUser());
  const error = useSelector(selectUserError());
  const loading = useSelector(selectUserLoading());
  const isAuth = useSelector(selectIsAuth());
  return (
    <div>
      <p>Current Theme: {theme.name}</p>
      <p>Auth status: {isAuth}</p>
      <ul>
        <li>
          <Link to="/profile">profile</Link>
        </li>
        <li>
          <Link to="/chats">chats</Link>
        </li>
        <li>
          <Link to="/gistslist">gists</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;
