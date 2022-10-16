import './Message.css';
function Message(props) {
    return (
        <span className="Message">{props.msg}
        </span>
    );
}
export default Message;
