import React from 'react'
import classes from './BuilderControl.module.css';

const builderControl = (props) => {
    return (
        <div className={classes.Content}>
            <div className={classes.Label}>
                <label>{props.label}</label>
            </div>
            <div >
             <button className={`${classes.RemoveButton} ${props.value > 0 ? null : classes.Disable}`} name={props.label} onClick={props.remove}>-</button>
            </div>
            <div>
                <button className={classes.AddButton} name={props.label} onClick={props.add}>+</button>
            </div>
            
        </div>)
}

export default builderControl;