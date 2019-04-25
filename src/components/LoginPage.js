import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.js';

export const LoginPage = ({ startLogin }) => (
      <div>
      <h3>Login section</h3>
        <button onClick={startLogin}>Login</button>/p>
      </div>
    );

    const mapDispatchToProps = (dispatch) => ({
      startLogin: () => dispatch(startLogin())
    });

    export default connect(undefined, mapDispatchToProps)(LoginPage);
  