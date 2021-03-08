import React from 'react';
import classes from './BurgerIngrident.module.css';

const burgerIngrident = (props) => {
    switch(props.type) {
        case "salad":
            return <div className={classes.Salad}></div>
          
        case "meat":
            return <div className={classes.Meat}></div>
           
        case "cheese":
            return <div className={classes.Cheese}></div>
         
        case "bacon":
                return <div className={classes.Bacon}></div>
               
        case "top-bread":
            return (
                <div className={classes.BreadTop}>
                    <div className={classes.Seed}></div>
                    <div className={classes.Seed2}></div>
                </div>
            )
        
        case "bottom-bread":
            return <div className={classes.BreadBottom}></div>
        
        default: 
            return <div></div>
    
        
    }
}

export default burgerIngrident;