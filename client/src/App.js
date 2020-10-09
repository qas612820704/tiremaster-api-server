import React from 'react';
import Helmet from 'react-helmet';
import { Router /*, Link */ } from '@reach/router';
import Header from './components/Header';
import Footer from './components/Footer';
// import Inventory from './pages/inventory';
// import Login from './pages/login';
import Home from './pages/home';
import Service from './pages/service';
import Search from './pages/search';
import About from './pages/about';
import Upgrade from './pages/upgrade';
// import Tips from './pages/tips';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Info, SearchSharp, Build, HomeSharp } from '@material-ui/icons';
const sections = [
  { title: '首頁', url: '/', itemIcon: <HomeSharp /> },
  { title: '關於我們', url: '/about', itemIcon: <Info /> },
  // { title: '服務項目', url: '/service' },
  { title: '中古胎現貨查詢', url: '/search', itemIcon: <SearchSharp /> },
  { title: '輪胎升級尺寸計算', url: '/upgrade', itemIcon: <Build /> },
  // { title: '小知識', url: '/tips' },
  // { title: '庫存系統', url: '/inventory' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.grey[600],
  },
  header: {},
  main: {
    display: 'flex-end',
    padding: theme.spacing(2, 0, 2),
    // backgroundColor: theme.palette.grey[600],
  },
  footer: {
    display: 'flex-end',
    marginTop: 'auto',
    padding: theme.spacing(3, 0, 3),
    backgroundColor: theme.palette.grey[800],
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Typography component="div" className={classes.root}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <Typography component="span" className={classes.header}>
        <Header title="輪胎大師" sections={sections} />
      </Typography>
      <Typography component="span" className={classes.main}>
        <Router>
          {<Home path="/" />}
          {<About path="/about" />}
          {/*<Inventory path="/inventory/*" />*/}
          {/*<Login path="/login" />*/}
          {/*<Service path="/service" />*/}
          {<Search path="/search" />}
          {<Upgrade path="/upgrade" />}
          {/*<Tips path="/tips" />*/}
        </Router>
      </Typography>
      <Typography component="span" className={classes.footer}>
        <Footer />
      </Typography>
    </Typography>
  );
}

export default App;
