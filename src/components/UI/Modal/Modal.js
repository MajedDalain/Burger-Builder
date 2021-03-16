import React , {Component} from 'react';
import Aux from '../../../containers/hoc/Aux/Aux';
import classes from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';


class Modal extends Component  {

    componentDidUpdate() {
        console.log("modal is updated");
    }

    shouldComponentUpdate(nextProps,nextState) {
        return (nextProps.showModal !== this.props.showModal) || (nextProps.children !== this.props.children);
    }
    
    render() {
        const modalClasses = this.props.showModal ? classes.Open : classes.Close;
        return(
            <Aux>
                {this.props.showModal && <BackDrop/>}
                <div className={[classes.Modal, modalClasses].join(" ")}>
                    {this.props.children}
                </div>
            
            </Aux>
            
        )
    }
  
}

export default Modal; 