import { TextField, Typography,Button } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    var[data,setData]=useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]: e.target.value})  
        console.log(data)
    }
  return (
    <div>
        <br />
        <Typography variant='h3'>Signup form</Typography>
        <br />
        <TextField variant='outlined' label="username" name='fname' onChange={inputHandler}/>
        <br />
        <br /><br />
        <TextField variant='outlined' label="email" name='psw' onChange={inputHandler} />
        <br /><br/>
        <TextField variant='outlined' label="password" name='em' onChange={inputHandler}/>
        <br />
        <br /><br />
        <Button variant='contained'>submit</Button>
    </div>
  )
}

export default Signup