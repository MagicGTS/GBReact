import './ChatList.css';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

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
                    {props.chats.map(chat => (
                        <ListItem disablePadding key={chat.id}><ListItemText primary={chat.name} /></ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    );
}
export default ChatList;
