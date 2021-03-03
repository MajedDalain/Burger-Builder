import React from 'react';


const burgerIngrident = (props) => {
    switch(props.type) {
        case "salad":
            return <div>Salad</div>
            break;
        case "meat":
            return <div>Meat</div>
            break;
        case "cheese":
            return <div>Cheese</div>
            break;
        default: 
            return <div>Bread</div>
            break;
        
    }
}

export default burgerIngrident;