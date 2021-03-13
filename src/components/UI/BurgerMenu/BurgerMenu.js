import React from 'react';
import classes from './BurgerMenu.module.css';


const burgerMenu = () => {
    return(
        <div className={classes.Main}>
            <div className={classes.Item}></div>
            <div className={classes.Item}></div>
            <div className={classes.Item}></div>
        </div>
    )
}

export default burgerMenu;