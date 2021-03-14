import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
import BurgerMenu from '../../UI/BurgerMenu/BurgerMenu';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
    <header className={classes.toolbar}>
        <BurgerMenu toggle={props.toggleSideDrawer}/>
        <Logo/>
        <NavigationItems/>
        
    </header>)
}

export default toolbar;