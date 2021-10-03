import React, { Component } from 'react'
import View from '../views/UserItem';

export default class UserList extends Component {
    render() {
        return (
            <View 
                key={this.props.id} 
                id={this.props.id} 
                image={this.props.image} 
                name={this.props.name} 
                placeCount={this.props.placeCount}
            />
        )
    }
}
