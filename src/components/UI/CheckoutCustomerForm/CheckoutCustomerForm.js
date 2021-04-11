import React from 'react';
import classes from './CheckoutCustomerForm.module.css';
import Button from '../Button/Button';
import httpHelper from '../../Helper/HttpHelper';
const checkoutCustomerForm = (props) => {
    const checkoutOrder = () => {
        httpHelper
            .post('orders.json', {
                cutomer: {
                    name: 'majed',
                    age: '30',
                    address: 'blidvadersgatan',
                },
            })
            .then((res) => {
                this.setState({
                    modalLoading: false,
                    showModal: false,
                });
            })
            .catch((error) => {});
    };

    return (
        <div className={classes.Container}>
            <h3>Enter your contact Info</h3>
            <form className={classes.Form}>
                <input type="text" name="name" placeholder="Name"></input>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                ></input>
                <input type="text" name="address" placeholder="Address"></input>
                <input type="text" name="tel" placeholder="Tel."></input>
                <div>
                    <Button clicked={props.backClicked} type="Cancel">
                        Back
                    </Button>
                    <Button type="Confirm" clicked={checkoutOrder}>
                        Confirm
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default checkoutCustomerForm;
