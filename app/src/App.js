import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Message from './Message/Message.js';
import ChatList from './ChatList/ChatList.js';
import MessageForm from './MessageForm/MessageForm.js';
//import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


function App() {
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([{ id: "chat1", name: "Main chat room" }, { id: "chat2", name: "Second chat room" }]);
  const handleAddMessage = (author, text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: text,
        author: author,
      },
    ]);
  };
  useEffect(() => {
    if (messages.length > 0) {
      let lastMessage = messages.slice(-1)[0];
      if (lastMessage.author !== "autobot") {
        const timer = setTimeout(() => {
          handleAddMessage("autobot", " I'm watching you!");
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [messages]);


  //debugger;
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid xs={2} md={4}>
          <ChatList chats={chats} />
        </Grid>
        <Grid xs={10} md={8}>
          <MessageForm handler={handleAddMessage} />
        </Grid>
        <Grid xs={10} md={8}><ul>
          {messages.map((message, index) => (
            <li key={index}><Message author={message.author} text={message.text} /></li>
          ))}
        </ul>
        </Grid>
      </Grid>

    </div>
  );
}
export default App;
