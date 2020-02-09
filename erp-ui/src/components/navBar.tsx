import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Chip from '@material-ui/core/Chip';

interface IRecipeProps {
    totalCounters: number
}

//Stateless Functional Component
const Navbar = (props: IRecipeProps) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">Nav Bar</Typography>
                <Chip label={props.totalCounters}
                    color={'secondary'} />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
