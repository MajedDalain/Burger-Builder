import React, { Component } from 'react';
import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/Burger/CheckoutSummary/CheckoutSummary';
import CheckoutCustomerForm from '../../components/UI/CheckoutCustomerForm/CheckoutCustomerForm';

class  Checkout extends Component {

    state = {
        ingridents: null,
        totalPrice: 0,
        isLoading: true
    }

    componentDidMount() {
        console.log(this.props);

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

    backToBurgerBuilder = () => {
        console.log("back button is clicked");
        console.log(this.props);
        this.props.history.push("/");
    }
    


    render() {
        return(
             <div className={classes.Checkout}>
                {!this.state.isLoading 
                && <CheckoutSummary ingridents={this.state.ingridents}/>  } 
                {!this.state.isLoading && <CheckoutCustomerForm backClicked={this.backToBurgerBuilder} props={this.props}/>}     
            </div>)
    }
}

export default Checkout;