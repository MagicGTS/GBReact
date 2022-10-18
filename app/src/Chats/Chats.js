import Message from "../Message/Message.js";
import MessageForm from "../MessageForm/MessageForm.js";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import {
  useParams,
} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { getMessages,getMessagesByAuthor } from '../store/chatsSlice.js'
import { initMessageTracking } from '../store/chatsMiddleware.js'
import React,{ useEffect } from "react";

function Chats() {
  const { id, author} = useParams();
  const dispatch = useDispatch();
  const selectedMessages = useSelector((typeof author !== "undefined") ? getMessagesByAuthor(id,author) : getMessages(id));
  useEffect(() => {
    dispatch(initMessageTracking());
    }, []);
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
