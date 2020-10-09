import React, { useState, useCallback } from 'react';
import { TextField, Button } from 'react-md';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from '@reach/router';
import { isEmpty } from 'lodash';

import * as apis from '../apis';
import * as actions from '../redux/actions';

function Login() {
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => !isEmpty(state.user));

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const login = useCallback(async (e) => {
    e.preventDefault();
    try {
      dispatch(actions.login(user));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch, user]);

  if (isLogined) {
    return <Redirect to="/" noThrow />;
  }

  return (
    <form onSubmit={login}>
      <TextField
        type="account"
        value={user.username}
        onChange={e => setUser({ ...user, username: e.target.value })}
      />
      <TextField
        type="password"
        value={user.password}
        onChange={e => setUser({ ...user, password: e.target.value })}
      />
      <Button type="submit">登入</Button>
    </form>
  );
}

export default Login;
