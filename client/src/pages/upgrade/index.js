import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import {
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  Typography,
  Button,
  Card,
  Grid,
  CardContent,
  Box,
  Container,
} from '@material-ui/core';
import DiagnosticImg from '../../assets/service_pack/011-diagnostic.png';
import UpgradeTable from './UpgradeTable';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  main: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  searchButton: {
    margin: theme.spacing(1),
  },
  search: {
    margin: theme.spacing(1),
    backgroundColor: 'white',
    margin: theme.spacing(2, 2, 2),
    padding: theme.spacing(2, 2, 2),
    borderRadius: '10px',
  },
  result: {
    margin: theme.spacing(1),
  },
  block: {
    fontSize: '2rem',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(0),
    paddingBottom: theme.spacing(2),
    backgroundColor: 'transparent',
  },
}));

const oldSpec = {
  title: '舊胎規格',
  spec: [
    {
      index: 'tireWidth',
      type: '胎寬',
      description: '請選擇胎寬',
      list: [
        155,
        165,
        175,
        185,
        195,
        205,
        215,
        225,
        235,
        245,
        255,
        265,
        275,
        285,
        295,
        305,
        315,
        325,
        335,
        345,
        355,
        365,
        375,
      ],
      endText: '/',
    },
    {
      index: 'tireHeight',
      type: '胎高',
      description: '請選擇扁平比',
      list: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
      endText: 'R',
    },
    {
      index: 'size',
      type: '尺寸',
      description: '請選擇尺寸',
      list: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      endText: ' ',
    },
  ],
};

const newSpec = {
  title: '新胎規格',
  spec: [
    {
      index: 'tireWidth',
      type: '胎寬',
      description: '請選擇胎寬',
      list: [
        155,
        165,
        175,
        185,
        195,
        205,
        215,
        225,
        235,
        245,
        255,
        265,
        275,
        285,
        295,
        305,
        315,
        325,
        335,
        345,
        355,
        365,
        375,
      ],
      endText: '/',
    },
    {
      index: 'tireHeight',
      type: '胎高',
      description: '請選擇扁平比',
      list: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
      endText: 'R',
    },
    {
      index: 'size',
      type: '尺寸',
      description: '請選擇尺寸',
      list: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      endText: ' ',
    },
  ],
};

export default function Upgrade() {
  const classes = useStyles();

  const [tireWidth, setTireWidth] = React.useState('');
  const [tireHeight, setTireHeight] = React.useState('');
  const [size, setSize] = React.useState('');
  const handleChange = (event, index) => {
    if (index == 'tireWidth') {
      setTireWidth(event.target.value);
    } else if (index == 'tireHeight') {
      setTireHeight(event.target.value);
    } else if (index == 'size') {
      setSize(event.target.value);
    }
  };

  const getValue = (index) => {
    if (index == 'tireWidth') {
      return tireWidth;
    } else if (index == 'tireHeight') {
      return tireHeight;
    } else if (index == 'size') {
      return size;
    }
  };

  return (
    <Typography component="div" className={classes.main}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={12} className={classes.search}>
              <Typography variant="h4" align="center" color="textPrimary">
                {'輪胎升級尺寸計算'}
              </Typography>

              <Grid
                container
                direction="row"
                justify="center"
                style={{ paddingTop: theme.spacing(2) }}
              >
                <Typography variant="h5">{oldSpec.title}</Typography>
              </Grid>
              <Grid container direction="row" justify="center">
                <Box display="flex" flexDirection="row" p={1} m={1}>
                  {oldSpec.spec.map((spec) => (
                    <Box
                      p={1}
                      key={spec.index}
                      display="flex"
                      flexDirection="row"
                      style={{ alignItems: 'center' }}
                    >
                      <FormControl
                        key={spec.index}
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={getValue(spec.index)}
                          onChange={(event) => handleChange(event, spec.index)}
                          label={spec.type}
                        >
                          {spec.list.map((content) => (
                            <MenuItem
                              key={spec.index + content}
                              value={content}
                            >
                              {content}
                            </MenuItem>
                          ))}
                        </Select>
                        <InputLabel id="demo-simple-select-outlined-label">
                          {spec.type}
                        </InputLabel>
                        <FormHelperText>{spec.description}</FormHelperText>
                      </FormControl>
                      <Box className={classes.block}>{spec.endText}</Box>
                    </Box>
                  ))}
                </Box>

                <Grid container direction="row" justify="center">
                  <Typography variant="h5">{newSpec.title}</Typography>
                </Grid>

                <Box display="flex" flexDirection="row" p={1} m={1}>
                  {newSpec.spec.map((spec) => (
                    <Box
                      p={1}
                      key={spec.index}
                      display="flex"
                      flexDirection="row"
                      style={{ alignItems: 'center' }}
                    >
                      <FormControl
                        key={spec.index}
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={getValue(spec.index)}
                          onChange={(event) => handleChange(event, spec.index)}
                          label={spec.type}
                        >
                          {spec.list.map((content) => (
                            <MenuItem
                              key={spec.index + content}
                              value={content}
                            >
                              {content}
                            </MenuItem>
                          ))}
                        </Select>
                        <InputLabel id="demo-simple-select-outlined-label">
                          {spec.type}
                        </InputLabel>
                        <FormHelperText>{spec.description}</FormHelperText>
                      </FormControl>
                      <Box className={classes.block}>{spec.endText}</Box>
                    </Box>
                  ))}
                </Box>
              </Grid>

              <Grid container direction="row" justify="center">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.searchButton}
                  size="large"
                >
                  {'計算尺寸'}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={12} className={classes.result}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom align="center" variant="h4">
                    {'計算結果'}
                  </Typography>
                </CardContent>
                {/*<CardMedia
              className={classes.cardMedia}
              image={DiagnosticImg}
              title="Image title"
            />*/}
                <CardContent className={classes.cardContent}>
                  <Typography>{'單位：公分'}</Typography>
                  <UpgradeTable />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </Typography>
  );
}
