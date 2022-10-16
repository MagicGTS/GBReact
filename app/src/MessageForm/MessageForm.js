import './MessageForm.css';
import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';
import Box from '@mui/material/Box';

import { useDispatch } from 'react-redux'
import { addMessageWithThunk } from '../store/chatsMiddleware.js'

function MessageForm(props) {
    const [state, setState] = useState({ author: 'author', text: 'text' });
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        dispatch(addMessageWithThunk(props.id,state.author,state.text))
        event.preventDefault();
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        ><div>
                <FormControl>
                    <InputLabel htmlFor="author-input">Author:</InputLabel>
                    <Input id="author-input" name="author" aria-describedby="author-input-helper-text" value={state.author} onChange={handleChange} autoFocus />
                    <FormHelperText id="author-input-helper-text">Please input your name.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="text-input">Message:</InputLabel>
                    <Input id="text-input" name="text" aria-describedby="text-input-helper-text" value={state.text} onChange={handleChange} />
                    <FormHelperText id="text-input-helper-text">Your message</FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
                </FormControl>
            </div>
        </Box>
    );
}
export default MessageForm;