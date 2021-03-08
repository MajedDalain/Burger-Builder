import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../hoc/Aux/Aux';
import BuilderControls from '../../components/Burger/BuilderControls/BuilderControls';
import classes from './BurgerBuilder.module.css';

class BurgerBuilder extends Component {

    constructor() {
        super();
    }

     ingridentPrices = {
        salad:1.5,
        bacon:2,
        cheese: 1.5,
        meat:2.5,
    }

    state = {
        ingridents: {
        salad:0,
        bacon:0,
        cheese: 0,
        meat:0,
    }, 
    totalPrice: 0
    }

    componentDidMount() {
        // console.log("inside component did upd")
    }

   addIngrident = (e) =>  {
    const type = e.target.name;
    if(this.state.ingridents[type] > 3) {
        return;
    }
    let newValue = this.state.ingridents[type] + 1 ;
    this.setState(prevState => ({
        ingridents : {
            ...prevState.ingridents,
            [e.target.name]: newValue
        },
        totalPrice : prevState.totalPrice + this.ingridentPrices[type]
    }))
   }

   removeIngrident = (e)  => {
    const type = e.target.name;
    let newValue = this.state.ingridents[type] - 1 ;
    if(this.state.ingridents[type] <= 0) {
        return;
    }
    this.setState(prevState => ({
        ingridents : {
            ...prevState.ingridents,
            [e.target.name]: newValue
        },
        totalPrice : prevState.totalPrice - this.ingridentPrices[type]
    }))
   }
   
    render() {
        return (
        <Aux>
            <div className= {classes.BurgerIngridents}>
            <Burger ingridents = {this.state.ingridents}/>
            </div>
            <span className={classes.TotalPrice}>total Price: {this.state.totalPrice}{" $"}</span>
            <div className={classes.BuilderControls}>
             <BuilderControls ingridents = {this.state.ingridents} add={this.addIngrident} remove= {this.removeIngrident}/>
            </div>
            <div>
                <button className={`${classes.OrderNow} ${this.state.totalPrice > 0 ? classes.OrderNowActive : classes.OrderNowDisable}`}>
                    Order Now
                    </button>
            </div>
        </Aux>
        )
    }
}

export default BurgerBuilder;