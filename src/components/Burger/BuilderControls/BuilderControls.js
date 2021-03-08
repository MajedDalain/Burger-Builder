import React from 'react';
import BuilderControl from './BuilderControl/BuilderControl';
import Aux from '../../../containers/hoc/Aux/Aux';

const builderControls = (props) => {
    console.log("inside the buildercontrols ");
    console.log(props.ingridents);
    const controllersKeys = Object.keys(props.ingridents);
       
    return (
        <Aux>
            <div>
                {controllersKeys.map((el,index) => <BuilderControl  label={el} add={props.add} remove={props.remove}></BuilderControl>)}
            </div>
        </Aux>
    )
}

export default builderControls;