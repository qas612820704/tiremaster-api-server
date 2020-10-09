import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import TiresImg from '../../assets/service_pack/034-tires.png';
import BatteryImg from '../../assets/service_pack/010-battery.png';
import FrameImg from '../../assets/service_pack/030-wheel.png';
import PostionImg from '../../assets/service_pack/004-lift.png';
import ChassisImg from '../../assets/service_pack/002-chassis.png';
import MaintenanceImg from '../../assets/service_pack/007-maintenance.png';
import RescueImg from '../../assets/service_pack/017-car trailer.png';
import AnalyzeImg from '../../assets/service_pack/025-car check.png';
import ReModelImg from '../../assets/service_pack/008-mechanic.png';
import BrakeImg from '../../assets/service_pack/013-brake.png';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 4, 4),
  },
  cardGrid: {
    padding: theme.spacing(2, 0, 2),
  },
  card: {
    height: '100%',
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
}));

const serviceItems = [
  {
    key: '0',
    primaryText: '中古輪胎',
    secondaryText:
      'This is a media card. You can use this section to describe the content.',
    imageSource: TiresImg,
  },
  {
    key: '1',
    primaryText: '油電車電池整修',
    secondaryText:
      'This is a media card. You can use this section to describe the content.',
    imageSource: BatteryImg,
  },
  {
    key: '2',
    primaryText: '輪框鋁圈',
    secondaryText:
      'This is a media card. You can use this section to describe the content.',
    imageSource: FrameImg,
  },
  {
    key: '3',
    primaryText: '3D定位',
    secondaryText:
      'This is a media card. You can use this section to describe the content.',
    imageSource: PostionImg,
  },
  {
    key: '4',
    primaryText: '底盤維修',
    secondaryText:
      'This is a media card. You can use this section to describe the content.',
    imageSource: ChassisImg,
  },
  {
    key: '5',
    primaryText: '保養維修',
    secondaryText:
      'This is a media card. You can use this section to describe the content.',
    imageSource: MaintenanceImg,
  },
  {
    key: '6',
    primaryText: '道路救援',
    secondaryText:
      'This is a media card. You can use this section to describe the content.',
    imageSource: RescueImg,
  },
  {
    key: '7',
    primaryText: '電腦診斷',
    secondaryText:
      'This is a media card. You can use this section to describe the content.',
    imageSource: AnalyzeImg,
  },
  {
    key: '8',
    primaryText: '汽車改裝',
    secondaryText:
      'This is a media card. You can use this section to describe the content.',
    imageSource: ReModelImg,
  },
  {
    key: '9',
    primaryText: '煞車系統優化',
    secondaryText:
      'This is a media card. You can use this section to describe the content.',
    imageSource: BrakeImg,
  },
];

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Service() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Typography component="div">
        <ThemeProvider theme={theme}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography variant="h3" align="center" color="textPrimary">
                {'輪胎大師汽車輪胎保養場'}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                {'輪胎大師提供最專業的汽車輪胎維修保養'}
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container spacing={4}>
              {serviceItems.map((item) => (
                <Grid item key={item.key} xs={12} sm={4} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={item.imageSource}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.primaryText}
                      </Typography>
                      <Typography>{item.secondaryText}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        {'服務資料'}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </ThemeProvider>
      </Typography>
    </React.Fragment>
  );
}
