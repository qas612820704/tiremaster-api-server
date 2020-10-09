import React, { useState, useCallback } from 'react';
import { isEmpty } from 'lodash';
import { Redirect } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Container,
  Typography,
} from '@material-ui/core';

import { AccountBox } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import * as actions from '../../redux/actions';
import * as apis from '../../apis';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        {'輪胎大師'}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#3d4977',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => !isEmpty(state.user));

  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const login = useCallback(async (e) => {
    e.preventDefault();
    try {
      const { data: profile } = await apis.login(user);
      dispatch(actions.setUser(profile));
    } catch (e) {
      console.error(e);
    }
  });

  const classes = useStyles();

  if (isLogined) {
    return <Redirect to="/" noThrow />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBox />
        </Avatar>
        <Typography component="h1" variant="h5">
          {'管理員登入'}
        </Typography>
        <form className={classes.form} noValidate onSubmit={login}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="account"
                label="帳號"
                name="account"
                autoComplete="account"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="密碼"
                type="password"
                id="password"
                autoComplete="current-password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="rememberLoginInfo" color="primary" />}
                label="記住我的帳號密碼"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {'登入'}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                {'忘記帳號/密碼?'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
