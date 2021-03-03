import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../hoc/Aux/Aux';
import BuilderControls from '../../components/Burger/BuilderControls/BuilderControls';
import classes from './BurgerBuilder.module.css';

class BurgerBuilder extends Component {

    constructor() {
        super();
        this.state = {
            ingridents: {
            salad:2,
            cheese: 1,
            meat:1
        }, 
        totalPrice: 0
        }
    }

   
   
    render() {
        return (
        <Aux>
            <Burger ingridents = {this.state.ingridents}/>
            <BuilderControls/>
        </Aux>
        )
    }
}

export default BurgerBuilder;