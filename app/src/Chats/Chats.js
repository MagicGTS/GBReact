import Message from "../Message/Message.js";
import MessageForm from "../MessageForm/MessageForm.js";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import {
  useParams,
} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { addMessage,getMessages,getMessagesByAuthor } from '../store/chatsSlice.js'
import React, { useEffect  } from "react";

function Chats(props) {
  const chats = useSelector((state) => state.chats)
  const { id, author} = useParams();
  const selectedMessages = useSelector((typeof author !== "undefined") ? getMessagesByAuthor(id,author) : getMessages(id));
  
  const dispatch = useDispatch()
  useEffect(() => {
    
    for (const [id, chat] of Object.entries(chats)) {
      if (chat.messages.length > 0) {
      let lastMessage = chat.messages.slice(-1)[0];
    if (lastMessage.author !== "autobot") {
      const timer = setTimeout(() => {
        dispatch(addMessage({chat: id, author: "autobot", text: "I'm watching you!"}));
      }, 1000);
      return () => clearTimeout(timer);
    }
    }
  }
}, [chats]);
  
  
  return (
    <Grid container spacing={1}>
       <Grid xs={10} md={8}>
        <MessageForm id={id}/>
      </Grid>
      <Grid xs={10} md={8}>
        <ul>
          {            
          selectedMessages.map((message, index) => (
            <li key={index}>
              <Message author={message.author} text={message.text} />
            </li>
          ))
          }
        </ul>
      </Grid>  
    </Grid>
  );
}
export default Chats;
