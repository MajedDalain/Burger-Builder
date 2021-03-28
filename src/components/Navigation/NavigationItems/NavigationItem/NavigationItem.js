import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';


const navigationItem = (props) => {
return(
    <NavLink className={classes.NavigationItem}
             to={props.link}
             activeClassName='active'
             >
        {props.children}
    </NavLink>
    );
}

export default navigationItem;