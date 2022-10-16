import Message from "../Message/Message.js";
import MessageForm from "../MessageForm/MessageForm.js";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import {
  useParams,
} from 'react-router-dom';
function Chats(props) {
  //debugger;
  const { id, author} = useParams();
  const messages ={value:[]};
  if (typeof author !== 'undefined'){
    messages.value = [...props.chats[id].messages.filter(item => item.author == author )]
  }else{
    messages.value = [...props.chats[id].messages]
  }
  return (
    <Grid container spacing={1}>
       <Grid xs={10} md={8}>
        <MessageForm handler={props.handler} id={id}/>
      </Grid>
      <Grid xs={10} md={8}>
        <ul>
          {            
          messages.value.map((message, index) => (
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
