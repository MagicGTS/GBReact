import './ChatList.css';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link,Outlet } from "react-router-dom";

function ChatList(props) {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="chat list header">
                <List>
                    <ListItem disablePadding>
                        <ListItemText primary="Chat list" />
                    </ListItem>
                </List>
            </nav>
            <Divider />
            <nav aria-label="main chats list">
                <List>
                    {
                        Object.keys(props.chats).map((chat) => (
                            <ListItem disablePadding key={chat}><Link to={"/chats/"+ chat}><ListItemText primary={props.chats[chat]['name']} /></Link></ListItem>
                            
                        ))
                    }
                </List>
            </nav>
            <Divider />
            <Outlet />
        </Box>
    );
}
export default ChatList;
