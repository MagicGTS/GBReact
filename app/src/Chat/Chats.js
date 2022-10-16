import Message from "../Message/Message.js";
import MessageForm from "../MessageForm/MessageForm.js";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import React, { useState, useEffect } from "react";
function Chat() {
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
  return (
    <Grid container spacing={1}>      
      <Grid xs={10} md={8}>
        <MessageForm handler={handleAddMessage} />
      </Grid>
      <Grid xs={10} md={8}>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <Message author={message.author} text={message.text} />
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}
export default Chats;
