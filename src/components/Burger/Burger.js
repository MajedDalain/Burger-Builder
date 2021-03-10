import React from 'react';
import Aux from '../../containers/hoc/Aux/Aux';
import BurgerIngridents from './BurgerIngridents/BurgerIngridents';

const burger = (props) => {
    return (
    <Aux>
        <BurgerIngridents ingridents = {props.ingridents}/>     
    </Aux>);
}

export default burger;