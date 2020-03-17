import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { Button, Form } from 'react-bootstrap';

import asyncOperations from '../redux/asyncOperations';
import selectors from '../redux/selectors';

function Login({ isAuthenticated, isError, logIn }) {
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();

  const onSubmit = async (data, e) => {
    data.Username = `${data.Username}@mail.com`;
    e.target.reset();
    logIn(data.Username, data.Password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/profile');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated ? (
        <h2 style={{ textAlign: 'center' }}>YOU ARE LOGGED</h2>
      ) : (
        <div className="form-container">
          {isError !== null && (
            <h3 style={{ color: 'red' }}>The username or password incorrect</h3>
          )}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>*Username</Form.Label>
              {errors.Username && (
                <span style={{ color: 'red', marginLeft: '10px' }}>
                  Required field
                </span>
              )}
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="Username"
                ref={register({ required: false, maxLength: 30 })}
              />
              <Form.Text className="text-muted">
                We'll never share your personal info with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>*Password</Form.Label>
              {errors.Username && (
                <span style={{ color: 'red', marginLeft: '10px' }}>
                  Required field
                </span>
              )}
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="Password"
                ref={register({ required: false, maxLength: 15 })}
              />
            </Form.Group>
            <Button variant="info" type="submit">
              SUBMIT
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: selectors.getAuth(state),
  isError: selectors.getError(state),
});

const mapDispatchToProps = {
  logIn: asyncOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
