import React from 'react';
import {
  withStyles,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import { Paper, Typography } from '@material-ui/core';
import BarGraph from './BarGraph';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({});

export default function SearchResultTable() {
  const classes = useStyles();

  return (
    <Typography component={Paper}>
      <ThemeProvider theme={theme}>
        <BarGraph />
      </ThemeProvider>
    </Typography>
  );
}
