import React, { Component } from 'react'
import View from '../views/MainNavigation';

export default class MainNavigation extends Component {
    state={drawerIsOpen:false};

    openDrawerHandler = ()=> {
        this.setState({drawerIsOpen:true});
    }
    closeDrawerHandler = () => {
        this.setState({drawerIsOpen:false});
    }
    
    render(props) {
        return (
            <View drawerIsOpen={this.state.drawerIsOpen} openDrawerHandler={this.openDrawerHandler} closeDrawerHandler={this.closeDrawerHandler} />
        )
    }
}
