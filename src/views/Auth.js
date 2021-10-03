import React, { useContext, useState } from 'react';

import Card from '../components/Card';
import Input from './Input';
import Button from './Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../util/validators';
import { useForm } from './form-hook';
import '../css/Auth.css';
import { AuthContext } from './auth-context';
import ErrorModal from './ErrorModal';
import LoadingSpinner from './LoadingSpinner';
import { useHttpClient } from './http-hook';
import ImageUpload from '../views/ImageUpload';
import { useHistory } from "react-router-dom";

const Auth = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          },
          image: {
            value: null,
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = async event => {
    event.preventDefault();


    if (isLoginMode) {
      try {
        const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/users/login`,
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          }),
          {
            'Content-Type': 'application/json'
          },
        );
        auth.login(responseData.userId, responseData.token);
      } catch (err) {
        //not handling errors here because the errors are being handled in our custom hook (http-hook)
      }
    } else {

      try {
        const formData = new FormData();
        formData.append('email', formState.inputs.email.value);
        formData.append('name', formState.inputs.name.value);
        formData.append('password', formState.inputs.password.value);
        formData.append('image', formState.inputs.image.value);
        const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/users/signup`,
          'POST',
          formData
        );

        if (responseData.confirmed) {
          auth.login(responseData.userId, responseData.token);
        } else {
          const data = {
            userId: responseData.userId, 
            token: responseData.token, 
            confirmed: responseData.confirmed 
          }
          localStorage.setItem('authData', JSON.stringify(data));
          history.push('/auth/activate');
        }
      } catch (error) { }
    }
  };

  //   try {
  //     const response = await fetch('http://localhost:8000/api/users/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         name: formState.inputs.name.value,
  //         email: formState.inputs.email.value,
  //         password: formState.inputs.password.value
  //       })
  //     });

  //     const responseData = await response.json();
  //     if (!response.ok) {
  //       throw new Error(responseData.message)
  //     }
  //     console.log(responseData);
  //     setIsLoading(false);
  //     auth.login();
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //     setError(error.message || 'Something went wrong, please try again!');
  //   }
  // }



  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />  {/* can use errorhandler in place of clearError in normal cases...  */}
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        {isLoginMode && <h2>Login Required</h2>}
        {!isLoginMode && <h2>Signup Required</h2>}
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
            />
          )}
          {!isLoginMode && <ImageUpload center id="image" onInput={inputHandler} errorText="Please provide an image." />}
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Auth;