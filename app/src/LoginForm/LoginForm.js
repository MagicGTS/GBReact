import './LoginForm.css';
import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';
import Box from '@mui/material/Box';

import { useDispatch } from 'react-redux'
import { getAuthUserThunk } from '../store/userMiddleware.js'

function LoginForm(props) {
    const [state, setState] = useState({ email: '', password: '' });
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        dispatch(getAuthUserThunk(state.email,state.password))
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
                    <InputLabel htmlFor="email-input">Email:</InputLabel>
                    <Input id="email-input" name="email" aria-describedby="email-input-helper-text" value={state.email} onChange={handleChange} autoFocus />
                    <FormHelperText id="email-input-helper-text">Please input your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="password-input">Password:</InputLabel>
                    <Input id="password-input" name="password" type="password" aria-describedby="password-input-helper-text" value={state.password} onChange={handleChange} />
                    <FormHelperText id="password-input-helper-text">password</FormHelperText>
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
export default LoginForm;