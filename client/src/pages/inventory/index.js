import React, { useState, useEffect } from 'react';
// import { Router } from '@reach/router';
// import CreateTire from './create';
// import * as apis from '../../apis';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import CreateTab from './CreateTab';
import SearchTab from './SearchTab';

// const Tires = () => {
//   return (
//     <Router>
//       <Index path="/" />
//       <CreateTire path="/create" />
//     </Router>
//   );
// };
//
// const Index = () => {
//   const [tires, setTires] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const { data: tires } = await apis.getTires();
//       setTires(tires);
//     }
//     fetchData();
//   }, []);
//
//   return (
//     <div className="md-grid">
//       {tires.map((tire) => (
//         <Card className="md-cell md-cell--6">
//           <CardTitle title={tire.number} />
//           <CardText>{JSON.stringify(tire, null, 2)}</CardText>
//         </Card>
//       ))}
//     </div>
//   );
// };

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
    margin: theme.spacing(6, 6, 6),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Inventory() {
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
    <Typography component="div" className={classes.root}>
      <Container maxWidth="md">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label={'查看庫存資料'} {...a11yProps(0)} />
            <Tab label={'加入庫存資料'} {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <SearchTab />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <CreateTab />
          </TabPanel>
        </SwipeableViews>
      </Container>
    </Typography>
  );
}
