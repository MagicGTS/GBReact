import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect ,useContext } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Home/Home.js";
import Profile from "./Profile/Profile.js";
import Chats from "./Chats/Chats.js";
import ChatList from "./ChatList/ChatList.js";
import {ThemeContext,themes} from "./Theme";
//import Grid from '@mui/material/Grid'; // Grid version 1

function App() {
  const [chats, setChats] = useState({
    0: {
      name: "chat1",
      messages: [],
    },
    1: {
      name: "chat2",
      messages: [],
    },
  });
  const handleAddMessage = (chat, author, text) => {
    setChats((prevChats) => {
      let chats = { ...prevChats };
      chats[chat].messages = [
        ...prevChats[chat].messages,
        {
          text: text,
          author: author,
        },
      ];
      return chats;
    });
  };
  useEffect(() => {
    
      for (const [id, chat] of Object.entries(chats)) {
        if (chat.messages.length > 0) {
        let lastMessage = chat.messages.slice(-1)[0];
      if (lastMessage.author !== "autobot") {
        const timer = setTimeout(() => {
          handleAddMessage(id,"autobot", " I'm watching you!");
        }, 1000);
        return () => clearTimeout(timer);
      }
      }
    }
  }, [chats]);
  //debugger;

  

  //debugger;
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats" element={<ChatList chats={chats} />}>
            <Route path=":id" element={<Chats chats={chats} handler={handleAddMessage} />} />
            <Route path=":id/:author" element={<Chats chats={chats} handler={handleAddMessage} />} />
          </Route>

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      </ThemeContext.Provider>
    </div>
  );
}
function Layout() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>Current Theme: {theme.name}</p>
      <ul>
        <li>
          <Link to="/profile">profile</Link>
        </li>
        <li>
          <Link to="/chats">chats</Link>
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
