import { AppBar, Button, Toolbar, Typography, colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div sx={{flexGrow:1}}  >
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{flexGrow:1}} align='left' variant='h6'>App</Typography>
                <Button   >
                    <Link to='/' style={{color:'white'}}>login</Link>
                    </Button>
                    <Button   >
                    <Link to='/Signup' style={{color:'white'}}>Sign up</Link>
                    </Button>
                    <Button   >
                    <Link to='/c' style={{color:'white'}}>counter</Link>
                    </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar