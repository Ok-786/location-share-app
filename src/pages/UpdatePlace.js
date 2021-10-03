import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AuthContext } from '../views/auth-context';
import '../css/NewPlace.css';
import Input from '../views/Input';
import Button from '../views/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../util/validators';
import { useForm } from '../views/form-hook';
import { Card } from '@mui/material';
import { useHttpClient } from '../views/http-hook';
import ErrorModal from '../views/ErrorModal';
import LoadingSpinner from '../views/LoadingSpinner';


const UpdatePlace = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const placeId = useParams().placeId;
  const [loadedPlace, setLoadedPlace] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`);
        setLoadedPlace(responseData.place);
        setFormData(
          {
            title: {
              value: responseData.place.title,
              isValid: true
            },
            description: {
              value: responseData.place.description,
              isValid: true
            }
          },
          true
        );
      } catch (err) { }
    }
    fetchPlace();
  }, [sendRequest, placeId, setFormData]);



  const placeUpdateSubmitHandler = async event => {
    event.preventDefault();
    try{
      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`,
      'PATCH',
      JSON.stringify({
        title: formState.inputs.title.value,
        description: formState.inputs.description.value,
      }), 
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`
        
      }
    );
    history.push(`/${auth.userId}/places`);
  } catch(err) { }
  };

  if (!loadedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    )
  }

  if (!loadedPlace && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find a place!</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedPlace && (<form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={loadedPlace.title}
          initialValid={true}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={inputHandler}
          initialValue={loadedPlace.description}
          initialValid={true}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>)}
    </React.Fragment>
  );
};

export default UpdatePlace;
