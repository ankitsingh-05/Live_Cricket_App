import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SportsCricketIcon from '@mui/icons-material/SportsCricket';

export default function NavBar() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
            <IconButton color='inherit'>
                <SportsCricketIcon></SportsCricketIcon>
            </IconButton>
            {/* <SportsCricketIcon></SportsCricketIcon> */}
            <Typography>
                Cricket App
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
