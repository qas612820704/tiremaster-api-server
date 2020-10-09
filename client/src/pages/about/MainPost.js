import * as React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Markdown from './Markdown';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { post, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">{title}</Typography>
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      </ThemeProvider>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
