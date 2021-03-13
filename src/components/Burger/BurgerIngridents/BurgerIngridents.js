import React from 'react';
import BurgerIngrident from './BurgerIngrident/BurgerIngrident';
import Aux from '../../../containers/hoc/Aux/Aux';

// will take a list of ingridenets with amount and render list of ingridents compoentns with a class based on props. 
const burgerIngridents = (props) => {

    let allIngridents = []; 
    const ingridentsLabels = Object.keys(props.ingridents);
    
    ingridentsLabels.map((el,index) => {
        for(let i = 0 ; i < props.ingridents[el]; i++) {
            allIngridents.push( <BurgerIngrident  type= {el}></BurgerIngrident>); 
        }
    })
    
    return (
        <Aux>
            <BurgerIngrident type="top-bread">Bread</BurgerIngrident>
                {(allIngridents && allIngridents.length > 0) ? allIngridents 
                : <div style={{fontWeight:'bold'}}>Add your Ingridents here</div> }
            <BurgerIngrident type="bottom-bread">Bottom Bread</BurgerIngrident>
        </Aux>
         
    );
}

export default burgerIngridents;