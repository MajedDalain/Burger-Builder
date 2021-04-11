import React from 'react';
import classes from './BurgerMenu.module.css';


const burgerMenu = (props) => {
    return(
        <div className={classes.Main} onClick={props.toggle}>
            <div className={classes.Item}></div>
            <div className={classes.Item}></div>
            <div className={classes.Item}></div>
        </div>
    )
}

export default burgerMenu;