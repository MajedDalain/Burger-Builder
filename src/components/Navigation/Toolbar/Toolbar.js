import React from 'react';
import classes from './Toolbar.module.css';

const toolbar = () => {
    return (
    <header className={classes.toolbar}>
        <div>Menu</div> 
        <div>Nav Items</div> 
        <div>lOGO</div> 
    </header>)
}

export default toolbar;