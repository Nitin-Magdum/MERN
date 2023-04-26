import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }} color="inherit" >
            <AppBar position="static" style={{ background: '#E9E9E9 ' }}>
                <Toolbar>
                    <Typography sx={{ mr: 2 }} variant="h6" component="div" color={'black'} >
                        Step Addition
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}