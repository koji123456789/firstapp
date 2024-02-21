import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <div>
            <br></br><br></br>
            <h1>Login page </h1>
            <input placeholder='username' />
            <br></br><br></br>
            <input placeholder='password' />
            <br></br>
            <button>submit</button>
            <br /><br />
            <Typography variant='h1'> login page</Typography>
            <br /><br />
            <TextField variant='outlined' label="Username" />
            <br /><br />
            <TextField variant='filled' label="password" />
            <br />
            <TextField variant='standard' label="caption" />
            <br />
            <Button variant='text'>rag</Button>
            <br />
            <Button variant='contained'>raj</Button>
            <br />
            <Button variant='outlined'>ram</Button>
            <br /><br />

            


        </div>
    )
}

export default Login