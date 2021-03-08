import React from 'react'
import classes from './BuilderControl.module.css';

const builderControl = (props) => {
    console.log(props);
    console.log("inside builder");
    return (
        <div className={classes.Content}>
            <div className={classes.Label}>
                <label>{props.label}</label>
            </div>
            <div >
             <button className={classes.RemoveButton} name={props.label} onClick={props.remove}>-</button>
            </div>
            <div>
                <button className={classes.AddButton} name={props.label} onClick={props.add}>+</button>
            </div>
            
        </div>)
}

export default builderControl;