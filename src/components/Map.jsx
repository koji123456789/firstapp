import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Map = () => {
    var [name,setName]=useState([
        {name: 'Ananda', age:23},
        {name: 'ardra', age:22},
        {name: 'navya', age:21},
        {name: 'nandana', age:18}
    ])
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'red', fontFamily:'cursive',fontSize:'50px'}} >Name</TableCell>
                        <TableCell style={{color:'red', fontFamily:'cursive',fontSize:'50px'}} >age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {name.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.age}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Map