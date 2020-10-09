import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    color: 'white',
    padding: theme.spacing(4, 4, 4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    opacity: 0.8,
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <Grid container>
        <Grid item md={6}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3" color="inherit">
              {post.title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {post.description}
            </Typography>
            {/*<Typography variant="h6" href="#">
              {post.linkText}
  </Typography>*/}
          </ThemeProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
