import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Listt = () => {
    var [inp,setInp]=useState(["ictak"])
    var[data,setData]=useState("")
    const inpHandle=(e)=>{
        console.log("on")
        setData(e.target.value)
        console.log("inp",data)
    }
    const add=()=>{
        console.log("c")
        setInp([...inp,data])
        console.log("sub",inp)
        setData("")
    }

  return (
    <div style={{marginTop:"50px"}}>
        <Typography variant='h1'>list</Typography>
        <TextField variant='outlined' label='enter your name' onChange={inpHandle}> </TextField>
        <Button variant='contained' onClick={add}>submit</Button>
        <br /><br />
        <ul>
          {
            inp.map((v,i) =>{
              return <li key={i} >{v}</li>
            }
            )
          }
        </ul>
    </div>
  )
}

export default Listt