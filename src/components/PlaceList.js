import React, { Component } from 'react'
import View from '../views/PlaceList';

export default class PlaceList extends Component {
    render(props) {
        return (
            <View items={this.props.items} onDelete={this.props.onDeletePlace}/>
        )
    }
}
