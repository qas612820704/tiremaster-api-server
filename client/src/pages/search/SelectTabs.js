import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
  Grid,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import PersonImg from '../../assets/retail_pack/person.png';
import TruckImg from '../../assets/retail_pack/truck.png';
import WareHouseImg from '../../assets/retail_pack/warehouse.png';

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
  result: {
    margin: theme.spacing(1),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    marginTop: theme.spacing(1),
    height: 100,
    width: 100,
    margin: 'auto',
  },
  cardContent: {
    flexGrow: 1,
  },
  block: {
    fontSize: '2rem',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(0),
    paddingBottom: theme.spacing(2),
    backgroundColor: 'transparent',
  },
}));

const resulType = [
  {
    key: '0',
    type: 'found',
    primaryText: '尚有庫存',
    secondaryText: '您要的商品的存貨數量：',
    imageSource: WareHouseImg,
  },
  {
    key: '1',
    type: 'else',
    primaryText: '需要調貨',
    secondaryText: '您要的商品在其他倉儲有存貨數量：',
    imageSource: TruckImg,
  },
  {
    key: '2',
    type: 'none',
    primaryText: '已無庫存',
    secondaryText: '抱歉！已無庫存！請搜尋其他款式或聯絡我們預定！',
    imageSource: PersonImg,
  },
];

export default function SelectTabs(props) {
  const classes = useStyles();
  // TODO: Could use dynamic array for flexibilty
  const [location, setLocation] = React.useState('');
  const [tireWidth, setTireWidth] = React.useState('');
  const [tireHeight, setTireHeight] = React.useState('');
  const [size, setSize] = React.useState('');
  const [resultIndex, setResultIndex] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  const handleChange = (event, index) => {
    if (index == 'location') {
      setLocation(event.target.value);
    } else if (index == 'tireWidth') {
      setTireWidth(event.target.value);
    } else if (index == 'tireHeight') {
      setTireHeight(event.target.value);
    } else if (index == 'size') {
      setSize(event.target.value);
    }
  };

  const getValue = (index) => {
    if (index == 'location') {
      return location;
    } else if (index == 'tireWidth') {
      return tireWidth;
    } else if (index == 'tireHeight') {
      return tireHeight;
    } else if (index == 'size') {
      return size;
    }
  };

  const { items } = props;

  return (
    <Typography component="div" className={classes.main}>
      {items.index == 1 && (
        <Box display="flex" flexDirection="row" p={1} m={1}>
          {items.specs.slice(1).map((spec) => (
            <Box
              p={1}
              key={spec.index}
              display="flex"
              flexDirection="row"
              style={{ alignItems: 'center' }}
            >
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={getValue(spec.index)}
                  onChange={(event) => handleChange(event, spec.index)}
                  label={spec.type}
                >
                  {spec.list.map((content) => (
                    <MenuItem key={spec.index + content} value={content}>
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
      )}
      <Box display="flex" flexDirection="row" p={1} m={1}>
        {items.specs.map((spec) => (
          <Box
            p={1}
            key={spec.index}
            display="flex"
            flexDirection="row"
            style={{ alignItems: 'center' }}
          >
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={getValue(spec.index)}
                onChange={(event) => handleChange(event, spec.index)}
                label={spec.type}
              >
                {spec.list.map((content) => (
                  <MenuItem key={spec.index + content} value={content}>
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

      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.searchButton}
          endIcon={<Search />}
          onClick={() => {
            setResultIndex((resultIndex + 1) % 3);
            setShowResult(true);
          }}
          size="large"
        >
          {'搜尋存貨'}
        </Button>
      </div>
      {showResult && (
        <Typography component="div" className={classes.result}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={resulType[resultIndex].imageSource}
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {resulType[resultIndex].primaryText}
              </Typography>
              <Typography>{resulType[resultIndex].secondaryText}</Typography>
            </CardContent>
          </Card>
        </Typography>
      )}
    </Typography>
  );
}

SelectTabs.propTypes = {
  items: PropTypes.object,
};
