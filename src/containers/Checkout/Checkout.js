import React, { Component } from 'react';
import classes from './Checkout.module.css';

class  Checkout extends Component {

    state = {
        ingridents: null,
    }

    componentDidMount() {
        console.log("checkout did mount");
        console.log(this.props);
        let ingridents = [];
        const searchParams = new URLSearchParams(this.props.history.location.search);
        for(let p of searchParams) {
            if(p[0] !== 'totalPrice') {
                ingridents.push(p)
            }
        }
        console.log(ingridents);
    }


    render() {
        const searchParams = new URLSearchParams(this.props.history.location.search);
        for(let p of searchParams) {
            if(p[0] !== 'totalPrfice') {
                console.log(p);

            }
        }
        return(<div className={classes.Checkout}>CheckOut Component!</div>)
    }
}

export default Checkout;