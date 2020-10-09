import React from 'react';
import { Typography, Container, Link, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Email, Message, Facebook } from '@material-ui/icons';

function Copyright() {
  return (
    <Typography
      style={{ marginTop: '8px' }}
      variant="body2"
      color="textSecondary"
    >
      {'Copyright © '}
      <Link color="inherit" href="#">
        {'輪胎大師'}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const socialItem = [
  { name: 'Line', icon: Message, url: '#' },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/tiremaster1123',
  },
];

const useStyles = makeStyles((theme) => ({
  footer: {},
  block: {
    padding: theme.spacing(1, 1, 1),
  },
  text: {
    color: theme.palette.grey[50],
  },
  linkText: {
    color: '#bbdefb',
    textDecoration: 'none',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Grid container direction="row" alignItems="center">
          <Grid item xs={12} sm={4} className={classes.block}>
            <Typography variant="h5" align="left" className={classes.text}>
              {'板橋店'}
            </Typography>
            <Typography variant="subtitle1" className={classes.text}>
              {'地址: 新北市板橋區民生路三段170號'}
            </Typography>
            <Typography
              component="a"
              variant="subtitle1"
              href="tel:02-82524009"
              className={classes.linkText}
            >
              {'電話: 02-82524009'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.block}>
            <Typography variant="h5" align="left" className={classes.text}>
              {'新泰店'}
            </Typography>
            <Typography variant="subtitle1" className={classes.text}>
              {'地址: 新北市泰山區新北大道五段606號'}
            </Typography>
            <Typography
              component="a"
              variant="subtitle1"
              href="tel:02-29048866"
              className={classes.linkText}
            >
              {'電話: 02-29048866'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.block}>
            {socialItem.map((item) => (
              <Link
                display="block"
                variant="body1"
                href={item.url}
                key={item.name}
              >
                <Grid container direction="row" spacing={1} alignItems="center">
                  <Grid item>
                    <item.icon className={classes.linkText} />
                  </Grid>
                  <Grid item className={classes.linkText}>
                    {item.name}
                  </Grid>
                </Grid>
              </Link>
            ))}
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
