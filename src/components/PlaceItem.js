import React, { Component } from 'react'
import View from '../views/PlaceItem';

export default class PlaceItem extends Component {
    state={showMap:false};

    openMapHandler=(event)=> {
        this.setState({showMap:true});
    }
    closeMapHandler=(event)=> {
        this.setState({showMap:false});
    }
    
    render() {
        return (
            <View
            key={this.props.id} 
            id={this.props.id}
            image={this.props.image}
            title={this.props.title}
            description={this.props.description}
            address={this.props.address}
            creatorId={this.props.creatorId}
            coordinates={this.props.coordinates}
            showMap={this.state.showMap}
            openMapHandler={this.openMapHandler}
            closeMapHandler={this.closeMapHandler}
            onDelete={this.props.onDelete}
            />
        )
    }
}
