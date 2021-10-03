import React, { useEffect, useState } from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router';
import { useHttpClient } from './http-hook';
import ErrorModal from './ErrorModal';
import LoadingSpinner from './LoadingSpinner';

const UserPlaces = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPlaces, setLoadedPlaces] = useState();
  const userId = useParams().userId;
  // const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`);
        setLoadedPlaces(responseData.places);
      } catch (err) { }
    }
    fetchPlaces();
  }, [sendRequest, userId]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces(prevPlaces => prevPlaces.filter(place=> place.id !== deletedPlaceId));
    
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <div className="center">
        <LoadingSpinner />
      </div>}
      {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />}
    </React.Fragment>
  )
};

export default UserPlaces;