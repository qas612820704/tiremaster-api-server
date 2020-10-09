import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Grid, Paper } from '@material-ui/core';
import SelectTabs from './SelectTabs';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2, 2),
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 2, 2),
    borderRadius: '10px',
  },
}));

const searchItem = [
  {
    index: 0,
    title: '轎車、休旅車規格 ',
    specs: [
      /*{
        index: 'location',
        type: '地點',
        description: '請選擇店址',
        list: ['板橋', '泰山'],
        endText: ' ',
      },*/
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
  },
  {
    index: 1,
    title: '貨車規格 ',
    specs: [
      /*{
        index: 'location',
        type: '地點',
        description: '請選擇店址',
        list: ['板橋', '泰山'],
        endText: ' ',
      },*/
      {
        index: 'tireWidth',
        type: '胎寬',
        description: '請選擇胎寬',
        list: [155, 165, 175, 185, 195],
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
        list: [12, 13, 14],
        endText: ' ',
      },
    ],
  },
];

export default function Search() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container maxWidth="lg">
      <Grid>
        <Grid item xs={12} md={12} className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              {searchItem.map((item) => (
                <Tab
                  style={{ fontSize: '1.4rem' }}
                  key={item.index}
                  label={item.title}
                  {...a11yProps(item.index)}
                />
              ))}
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            {searchItem.map((item) => (
              <Grid container direction="row" justify="center" key={item.index}>
                <TabPanel
                  value={value}
                  index={item.index}
                  dir={theme.direction}
                >
                  <SelectTabs items={item} />
                </TabPanel>
              </Grid>
            ))}
          </SwipeableViews>
        </Grid>
      </Grid>
    </Container>
  );
}
