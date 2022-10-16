import './Message.css';
function Message(props) {
    return (
        <div><span className="MsgAuthor">{props.author}:</span> <span className="MsgText">{props.text}</span></div>
    );
}
export default Message;
