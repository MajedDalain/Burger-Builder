import React from 'react';
import Burger from '../Burger';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    
    return(
        <div className={classes.CheckoutSummary}>
            <Burger ingridents = {props.ingridents}/>
        </div>
    )
}

export default checkoutSummary;