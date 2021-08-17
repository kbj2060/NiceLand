import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './appbar.css'


export default function PermanentAppBar() {
    return (
        <div className='appbar-root'>
            <AppBar position="static" className="appbar">
                <Toolbar className="toolbar">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <div className="company_name-div">
                        <Typography color="inherit" className="company_name">NiceLand</Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

