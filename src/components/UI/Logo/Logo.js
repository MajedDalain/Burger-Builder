import React from 'react';
import classes from './Logo.module.css';
import LogoImage from '../../../assets/images/burger-svgrepo-com.svg';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={LogoImage}/>
        </div>
    )
}

export default logo;