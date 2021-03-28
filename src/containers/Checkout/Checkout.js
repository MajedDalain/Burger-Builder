import React, { Component } from 'react';
import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/Burger/CheckoutSummary/CheckoutSummary';

class  Checkout extends Component {

    state = {
        ingridents: null,
        totalPrice: 0,
        isLoading: true
    }

    componentDidMount() {

        let ingridents = {};

        const searchParams = new URLSearchParams(this.props.history.location.search);

        for(let p of searchParams.keys()) {
            if(p === 'totalPrice') {
                this.setState({totalPrice: searchParams.get('totalPrice')});
            } else {
                ingridents[p] = searchParams.get(p);
            }
        }
        this.setState({
            ingridents: ingridents,
            isLoading: false
        })
    }


    render() {
        return(
             <div className={classes.Checkout}>
                {!this.state.isLoading 
                && <CheckoutSummary ingridents={this.state.ingridents}/>  }      
            </div>)
    }
}

export default Checkout;