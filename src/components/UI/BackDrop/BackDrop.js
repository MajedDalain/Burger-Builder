import React from 'react';
import classes from './BackDrop.module.css';

const backdrop = (props) => {
    return(<div className={classes.BackDrop} onClick={props.toggle}></div>)
}

export default backdrop;