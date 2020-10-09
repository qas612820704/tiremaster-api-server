import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Button,
  IconButton,
  Typography,
  Link,
  Avatar,
  Grid,
} from '@material-ui/core';
import { Search, Add, Home, AccountCircle } from '@material-ui/icons';
import MenuDrawer from './MenuDrawer';
import * as apis from '../../apis';
import * as actions from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: '85px',
    backgroundColor: theme.palette.grey[900],
    color: 'white',
  },
  toolbarTitle: {
    flex: 1,
    paddingRight: '55px',
  },
  toolbarSecondary: {
    height: '35px',
    backgroundColor: theme.palette.grey[800],
    justifyContent: 'space-between',
    overflowX: 'auto',
    color: 'white',
  },
  toolbarLink: {
    padding: theme.spacing(1, 2, 1),
    backgroundColor: '#555555',
    flexShrink: 0,
  },
  iconButton: {
    backgroundColor: theme.palette.grey[800],
    color: 'white',
  },
  textButton: {
    color: 'white',
    fontSize: '1.6rem',
    width: '80vw',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Header(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isLogined = !isEmpty(user);

  const classes = useStyles();
  const { sections, title } = props;
  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          direction="row"
          alignItems="center"
        //style={{ backgroundColor: 'pink' }}
        >
          <MenuDrawer />
          {/*<IconButton
            className={classes.iconButton}
            style={{ marginLeft: '5px' }}
            href="/"
          >
            <Home style={{ color: 'white' }} />
          </IconButton>*/}
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center">
          <Button
            href="/"
            startIcon={
              <Avatar
                alt="Logo"
                src="/static/logo_round.png"
                className={classes.avatar}
              />
            }
            className={classes.textButton}
          >
            輪胎大師
          </Button>
          {/*<Grid item>
          </Grid>
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography>*/}
        </Grid>
        <Grid
          justify="flex-end"
          container
          direction="row"
          alignItems="center"
        //style={{ backgroundColor: 'pink' }}
        >
          {/*<IconButton
            className={classes.iconButton}
            style={{ marginRight: '5px' }}
          >
            <Search style={{ color: 'white' }} />
          </IconButton>
          <AuthButton />*/}
        </Grid>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Button
            color="inherit"
            key={section.title}
            href={section.url}
            className={classes.toolbarLink}
            startIcon={section.itemIcon}
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

function AuthButton() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isLogined = !isEmpty(user);
  const classes = useStyles();
  const logout = useCallback(async () => {
    try {
      await apis.logout();
      dispatch(actions.clearUser());
    } catch (e) {
      console.error(e);
    }
  });

  return !isLogined ? (
    <IconButton
      href="/login"
      className={classes.iconButton}
      style={{ marginRight: '5px' }}
    >
      <AccountCircle style={{ color: 'white' }} />
    </IconButton>
  ) : (
      <Button
        className={classes.textButton}
        variant="outlined"
        size="small"
        onClick={logout}
      >
        {'登出'}
      </Button>
    );
}

export default Header;
