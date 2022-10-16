import './MessageForm.css';
import React, { useState } from 'react';
function MessageForm(props) {
    const [state, setState] = useState({ author: 'author', text: 'text' });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        props.handler(state.author, state.text);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Author:
                <input name="author" type="text" value={state.author} onChange={handleChange} />
            </label>
            <label>
                Text:
                <input name="text" type="text" value={state.text} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}
export default MessageForm;