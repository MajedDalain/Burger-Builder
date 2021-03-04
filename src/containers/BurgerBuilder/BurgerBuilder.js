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
            bacon:1,
            cheese: 2,
            meat:2,
        }, 
        totalPrice: 0
        }
    }

   
   
    render() {
        return (
        <Aux>
            <div className= {classes.BurgerIngridents}>
            <Burger ingridents = {this.state.ingridents}/>
            </div>
            <div className={classes.BuilderControls}>
             <BuilderControls ingridents = {this.state.ingridents}/>
            </div>
        </Aux>
        )
    }
}

export default BurgerBuilder;