import React from 'react';
import classes from './BurgerIngrident.module.css';

const burgerIngrident = (props) => {
    switch(props.type) {
        case "salad":
            return <div className={classes.Salad}></div>
            break;
        case "meat":
            return <div className={classes.Meat}></div>
            break;
        case "cheese":
            return <div className={classes.Cheese}></div>
            break;
        case "bacon":
                return <div className={classes.Bacon}></div>
                break;
        case "top-bread":
            return (
                <div className={classes.BreadTop}>
                    <div className={classes.Seed}></div>
                    <div className={classes.Seed2}></div>
                </div>
            )
            break;
        case "bottom-bread":
            return <div className={classes.BreadBottom}></div>
            break;
        default: 
            return <div></div>
            break;
        
    }
}

export default burgerIngrident;