import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';

import selectors from '../redux/selectors';

function Profile({ isAuthenticated, user }) {
  const history = useHistory();

  useEffect(
    () => {
      if (!isAuthenticated) {
        history.push('/login');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAuthenticated],
  );

  return (
    <>
      {isAuthenticated && (
        <div>
          <Alert variant="info">
            <Alert.Heading>
              Hey, nice to see you{' '}
              <span style={{ color: '#41e0fd' }}>{user.slice(0, 5)}</span>
            </Alert.Heading>
            <p>Aww yeah, you successfully logged.</p>
            <hr />
            <p className="mb-0">
              Wash your hands to protect yourself from Covid-19.
            </p>
          </Alert>
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: selectors.getAuth(state),
  user: selectors.getUser(state),
});

export default connect(mapStateToProps, null)(Profile);
