import React from 'react';
import classes from './Layout.module.css';
import Aux from '../../containers/hoc/Aux/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar'
const layout = (props) => {
    return (
    <Aux>
        <Toolbar/>
        <main className={classes.content}>
            {props.children}
        </main>
        <footer className={classes.footer}>Daleen Burger</footer>
    </Aux>
    )
}

export default layout;