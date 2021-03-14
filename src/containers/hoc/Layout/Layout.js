import React , {Component} from 'react';
import classes from './Layout.module.css';
import Aux from '../Aux/Aux';
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../components/Navigation/SideDrawer/SideDrawer';


class layout extends Component {

    state = {
        toggleSideDrawer : false
    }

    handleSideDrawerToggle = () => {
        console.log("Layout component")
        this.setState((prevState) => {
            return {
                toggleSideDrawer: !prevState.toggleSideDrawer
            }
        });
        console.log(this.state.toggleSideDrawer);
    }

    render() {
        return (
            <Aux>
                <Toolbar toggleSideDrawer={this.handleSideDrawerToggle}/>
                {<SideDrawer toggleSideDrawer={this.state.toggleSideDrawer} handleSideDrawer={this.handleSideDrawerToggle}/>}
                <main className={classes.content}>
                    {this.props.children}
                </main>
                <footer className={classes.footer}>Daleen Burger</footer>
            </Aux>
            )
    }
   
}

export default layout;