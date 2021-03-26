import React from 'react';
import Aux from '../../../containers/hoc/Aux/Aux';
import classes from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    
    const ingridentsList = Object.keys(props.ingridents).map(el => {
    return (
        <li key={el} className={classes.List}>
            <div>
                <span style={{ textTransform: "capitalize" }}>{el} :</span>
            </div>
            <div>
                <span style={{ left: '0' }}>{props.ingridents[el]}</span>
            </div>

        </li>
    )
    });

    return(
        <Aux>
            <h3>Order Summary</h3>
            <p style={{fontSize:"1.1rem"}}> 🍔🍟 Burger with following ingridents: </p>
            <ul>
                {ingridentsList}
            </ul>
            <span>Price : <strong className={classes.TotalPrice}>{props.totalPrice} $</strong></span>
            <div>
                <Button type = "Cancel" clicked={props.cancelClicked}>Cancel</Button>
                <Button type="Confirm" clicked={props.confirmClicked}>Continue</Button>
            </div>
            
        </Aux>
    )
}

export default orderSummary; 