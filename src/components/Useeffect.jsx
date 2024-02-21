import { Typography,Button } from '@mui/material'
import React,{useState} from 'react'

const Useeffect = () => {
//     var x="angular"
    var [X,setX]=useState("angular")
    const rea=(e)=>{
        setX("react")
      }
    const anu=(e)=>{
        setX("angular")
      }
    const ext=(e)=>{
        setX("next")
      }


  return (
    <div>
        <Typography variant='h3'>welcome to {X}</Typography>
        <br /><br />
        <Button variant='contained' onClick={rea}>react</Button>&nbsp;
        <Button variant='contained' onClick={anu}>angular</Button>&nbsp;
        <Button variant='contained' onClick={ext}>next</Button>&nbsp;
    </div>
  )
}

export default Useeffect