import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    count=0
    var [count,setCount]=useState(0)
    const add =(e)=>{
        var a=count+1;
        setCount(a)
      }
        const  sub=(e)=>{
          var b=count-1;
          setCount(b)
        }
  return (
    <div>
        <Typography variant='h3'>Count:{count}</Typography>
        <br />
        <Button variant='contained' color='success' onClick={add}>+</Button>
        &nbsp;
        <Button variant='contained' color='error' onClick={sub}>-</Button>
    </div>
  )
}

export default Counter