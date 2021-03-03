import React from 'react';
import BuilderControl from './BuilderControl/BuilderControl';
import Aux from '../../../containers/hoc/Aux/Aux';

const builderControls = () => {
    return (
        <Aux>
            <BuilderControl>Salad Controler</BuilderControl>
            <BuilderControl>Meat Controler</BuilderControl>
            <BuilderControl>ketchup Controler</BuilderControl>
        </Aux>
    )
}

export default builderControls;