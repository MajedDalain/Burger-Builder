import React from 'react';
import OrderSummary from '../../../components/Burger/OrderSummary/OrderSummary';
import Aux from '../../../containers/hoc/Aux/Aux';
import classes from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';
import Button from '../../UI/Button/Button';

const Modal = (props) => {
    const modalClasses = props.showModal ? classes.Open : classes.Close;
    return(
        <Aux>
            {props.showModal && <BackDrop/>}
            <div className={[classes.Modal, modalClasses].join(" ")}>
                <OrderSummary totalPrice={props.totalPrice} ingridents={props.ingridents}/>
                <div>
                    <Button type="Confirm">Confirm</Button>
                    <Button type = "Cancel" cancel={props.cancel}>Cancel</Button>
                </div>
              
            </div>
        
        </Aux>
        
    )
}

export default Modal; 