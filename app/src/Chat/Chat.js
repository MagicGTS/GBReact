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
export default Chat;
