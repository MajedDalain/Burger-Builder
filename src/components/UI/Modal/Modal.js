import React , {Component} from 'react';
import OrderSummary from '../../../components/Burger/OrderSummary/OrderSummary';
import Aux from '../../../containers/hoc/Aux/Aux';
import classes from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';
import Button from '../../UI/Button/Button';

class Modal extends Component  {

    shouldComponentUpdate(nextProps,nextState) {
        return nextProps.showModal !== this.props.showModal;
    }
    
    render() {
        const modalClasses = this.props.showModal ? classes.Open : classes.Close;
        return(
            <Aux>
                {this.props.showModal && <BackDrop/>}
                <div className={[classes.Modal, modalClasses].join(" ")}>
                    <OrderSummary totalPrice={this.props.totalPrice} ingridents={this.props.ingridents}/>
                    <div>
                        <Button type="Confirm">Confirm</Button>
                        <Button type = "Cancel" cancel={this.props.cancel}>Cancel</Button>
                    </div>
                  
                </div>
            
            </Aux>
            
        )
    }
  
}

export default Modal; 