import React from 'react'
import '../css/PlaceList.css';
import Card from '../components/Card';
import PlaceItem from '../components/PlaceItem';
import Button from './Button';

const PlaceList = props => {
    if (props.items.length === 0) {
      return (
        <div className="place-list center">
          <Card>
            <h2>No places found. Maybe create one?</h2>
            <Button to="/places/new">Share Place</Button>
          </Card>
        </div>
      );
    }
  
    return (
      <ul className="place-list">
        {props.items.map(place => (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.image}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
            onDelete = {props.onDelete}
          />
        ))}
      </ul>
    );
  };
  
  export default PlaceList;
  