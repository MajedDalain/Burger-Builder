import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../UI/Logo/Logo';
import Aux from '../../../containers/hoc/Aux/Aux'
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';

const sideDrawer = (props) => {
    const sideDrawerClasses = props.toggleSideDrawer ? classes.Open : classes.Close;

    return(
        <Aux>
            {props.toggleSideDrawer && <BackDrop toggle={props.handleSideDrawer}/>}
            <div className={[classes.Content,sideDrawerClasses].join(" ")}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <div className={classes.Item}>
                    <NavigationItems/> 
                </div>
            </div>
        </Aux>
        
    )
}

export default sideDrawer;