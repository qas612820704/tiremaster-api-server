import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SearchResultTable from './SearchResultTable';

const useStyles = makeStyles((theme) => ({
  main: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  searchButton: {
    margin: theme.spacing(3, 3, 3),
    right: '0px',
  },
}));

export default function SearchTab(props) {
  const classes = useStyles();
  const [search, setSearch] = React.useState({
    number: '',
    width: '155',
    height: '20',
    size: '13',
    brand: '',
    year: '14',
    manufacturer: '',
    price: '',
    location: '',
  });

  const updateSearchArgs = React.useCallback(
    (state) => {
      setSearch({ ...search, ...state });
    },
    [search],
  );

  const startSearch = React.useCallback(
    async (e) => {
      e.preventDefault();
      try {
        // query
        // await apis.createTire(tire);
        // navigate('/tires');
      } catch (e) {
        console.error(e);
        return;
      }
    },
    [search],
  );

  return (
    <>
      <Typography component="div" className={classes.main}>
        <NumberField
          value={search.number}
          onChange={(number) => updateSearchArgs({ number })}
        />
        <WidthField
          value={search.width}
          onChange={(width) => updateSearchArgs({ width })}
        />
        <HeightField
          value={search.height}
          onChange={(height) => updateSearchArgs({ height })}
        />
        <SizeField
          value={search.size}
          onChange={(size) => updateSearchArgs({ size })}
        />
        <BrandField
          value={search.brand}
          onChange={(brand) => updateSearchArgs({ brand })}
        />
        <ManufacturerField
          value={search.manufacturer}
          onChange={(manufacturer) => updateSearchArgs({ manufacturer })}
        />
        <YearField
          value={search.year}
          onChange={(year) => updateSearchArgs({ year })}
        />
        <PriceField
          value={search.price}
          onChange={(price) => updateSearchArgs({ price })}
        />
        <LocationField
          value={search.location}
          onChange={(location) => updateSearchArgs({ location })}
        />
      </Typography>
      <Typography component="div" className={classes.searchButton}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
          onClick={(e) => {
            submit(e);
          }}
        >
          庫存查詢
        </Button>
      </Typography>
      <SearchResultTable />
    </>
  );
}

const StringFieldPropTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

function NumberField({ value, onChange }) {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <TextField
        id="search-number"
        label={'編號'}
        width={100}
        value={value}
        helperText={'請輸入編號'}
        variant="outlined"
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </FormControl>
  );
}
NumberField.propTypes = StringFieldPropTypes;

function WidthField({ value, onChange }) {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <TextField
        id="search-width"
        label={'胎寬'}
        value={value}
        helperText={'請輸入胎寬'}
        variant="outlined"
        onChange={(e) => onChange(e.target.value)}
        type="number"
        InputLabelProps={{ shrink: true }}
        InputProps={{ inputProps: { min: 155, max: 375, step: 5 } }}
        required
      />
    </FormControl>
  );
}
WidthField.propTypes = StringFieldPropTypes;

function HeightField({ value, onChange }) {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <TextField
        id="search-height"
        label={'胎高'}
        value={value}
        helperText={'請輸入胎高'}
        variant="outlined"
        onChange={(e) => onChange(e.target.value)}
        type="number"
        InputLabelProps={{ shrink: true }}
        InputProps={{ inputProps: { min: 20, max: 75, step: 5 } }}
        required
      />
    </FormControl>
  );
}
HeightField.propTypes = StringFieldPropTypes;

function SizeField({ value, onChange }) {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <TextField
        id="search-size"
        label={'尺寸'}
        value={value}
        helperText={'請輸入尺寸'}
        variant="outlined"
        onChange={(e) => onChange(e.target.value)}
        type="number"
        InputLabelProps={{ shrink: true }}
        InputProps={{ inputProps: { min: 13, max: 24, step: 1 } }}
        required
      />
    </FormControl>
  );
}
SizeField.propTypes = StringFieldPropTypes;

function BrandField({ value, onChange }) {
  const classes = useStyles();
  const brands = [
    'CO',
    'PIR',
    'BS',
    'YO',
    'TO',
    'NI',
    'GY',
    'DL',
    'MA',
    'FIR',
    'KM',
    'FK',
  ];

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        id="search-brand"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label={'品牌'}
      >
        {brands.map((brand) => (
          <MenuItem key={brand} value={brand}>
            {brand}
          </MenuItem>
        ))}
      </Select>
      <InputLabel>{'品牌'}</InputLabel>
      <FormHelperText>{'請選擇品牌'}</FormHelperText>
    </FormControl>
  );
}
BrandField.propTypes = StringFieldPropTypes;

function YearField({ value, onChange }) {
  const classes = useStyles();
  const minYear = 2008;
  const maxYear = new Date().getFullYear();

  const years = new Array(maxYear - minYear + 1)
    .fill(minYear)
    .map((y, i) => `${y + i}`.substr(2, 2));

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        id="search-year"
        label={'年份'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
      <InputLabel>{'年份'}</InputLabel>
      <FormHelperText>{'請選擇年份'}</FormHelperText>
    </FormControl>
  );
}
YearField.propTypes = StringFieldPropTypes;

function ManufacturerField({ value, onChange }) {
  const classes = useStyles();
  const manufacturers = ['K', 'KF', 'H', 'F', 'FT', 'FW', 'WT', 'L', 'S', 'W'];

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="search-manufacturer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label={'廠商'}
      >
        {manufacturers.map((manufacturer) => (
          <MenuItem key={manufacturer} value={manufacturer}>
            {manufacturer}
          </MenuItem>
        ))}
      </Select>
      <InputLabel id="demo-simple-select-outlined-label">{'廠商'}</InputLabel>
      <FormHelperText>{'請選擇廠商'}</FormHelperText>
    </FormControl>
  );
}
ManufacturerField.propTypes = StringFieldPropTypes;

function PriceField({ value, onChange }) {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <TextField
        id="search-price"
        label={'價格'}
        value={value}
        helperText={'請輸入價格'}
        variant="outlined"
        onChange={(e) => onChange(e.target.value)}
        type="number"
        InputLabelProps={{ shrink: true }}
        InputProps={{ inputProps: { min: 0, step: 1 } }}
        required
      />
    </FormControl>
  );
}
PriceField.propTypes = StringFieldPropTypes;

function LocationField({ value, onChange }) {
  const classes = useStyles();
  const locations = ['板橋', '新泰', '總倉'];
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        id="search-location"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label={'地點'}
      >
        {locations.map((location) => (
          <MenuItem key={location} value={location}>
            {location}
          </MenuItem>
        ))}
      </Select>
      <InputLabel>{'地點'}</InputLabel>
      <FormHelperText>{'請選擇存貨地點'}</FormHelperText>
    </FormControl>
  );
}
LocationField.propTypes = StringFieldPropTypes;
