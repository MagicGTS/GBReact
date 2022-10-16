import './App.css';
import React, { useState, useEffect } from 'react';
import Message from './Message/Message.js';
import MessageForm from './MessageForm/MessageForm.js';

function App() {
  const [messages, setMessages] = useState([]);
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
      <MessageForm handler={handleAddMessage} />
      <ul>
        {messages.map((message, index) => (
          <li key={index}><Message author={message.author} text={message.text} /></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
