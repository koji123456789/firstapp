import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
  var [fname,setFname]=useState("nandana")
  var [val,setVal]=useState()
  var [cname,setcname]=useState("chandran")
  const handleInput =(e)=>{
    console.log(e.target.value)
    setVal(e.target.value)
  }
    const  submitHandle=(e)=>{
      console.log("clicked")
      setFname(val)
}

  return (
    <div>
      <br/>
      <Typography variant='h4'>Welcome {fname}</Typography>
      <br />
      <TextField variant='outlined' onChange={handleInput} label='type your name'/>
      <br /><br />
      <Button variant='contained' onClick={submitHandle}>submit</Button>
      </div>
  )
}

export default State