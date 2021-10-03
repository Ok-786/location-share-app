import React, { Component } from 'react'
import View from '../views/UserList';

export default class UserList extends Component {
    render(props) {
        return (
            <View items={this.props.items}/>
        )
    }
}
