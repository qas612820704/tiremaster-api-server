import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import {
  Menu,
  EmojiTransportation,
  Info,
  ShopTwo,
  Search,
  Build,
  Home,
  EmojiObjects,
} from '@material-ui/icons';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const itemList = [
  {
    key: 'home',
    title: '首頁',
    itemIcon: <Home />,
    url: '/',
  },
  {
    key: 'about',
    title: '關於我們',
    itemIcon: <Info />,
    url: '/about',
  },
  /*{
    key: 'service',
    itemIcon: <ShopTwo />,
    title: '服務項目',
    url: '/service',
  },*/
  {
    key: 'search',
    itemIcon: <Search />,
    title: '中古胎現貨查詢',
    url: '/search',
  },
  {
    key: 'upgrade',
    itemIcon: <Build />,
    title: '輪胎升級尺寸計算',
    url: '/upgrade',
  },
  /*{
    key: 'tips',
    itemIcon: <EmojiObjects />,
    title: '小知識',
    url: '/tips',
  },
  {
    key: 'inventory',
    itemIcon: <EmojiTransportation />,
    title: '庫存系統',
    url: '/inventory',
  },*/
];

const renderList = (item) => {
  return (
    <List key={item.key}>
      <ListItem button button component="a" href={item.url}>
        <ListItemIcon>{item.itemIcon}</ListItemIcon>
        <ListItemText>{item.title}</ListItemText>
      </ListItem>
    </List>
  );
};

export default function MenuDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h3 style={{ marginTop: '15px' }} align="center">
        {'目錄'}
      </h3>
      <Divider />
      {itemList.map((item) => {
        return renderList(item);
      })}
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            style={{ backgroundColor: '#424242', marginLeft: '5px' }}
            onClick={toggleDrawer(anchor, true)}
            aria-label="delete"
          >
            <Menu style={{ color: 'white' }} />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
