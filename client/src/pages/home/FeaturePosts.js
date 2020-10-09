import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
  Link,
} from '@material-ui/core';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(3, 1, 0),
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="div" href="#">
        <Card className={classes.card}>
          <CardContent className={classes.cardDetails}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4">{post.title}</Typography>
              <Typography variant="h6" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="h6" paragraph>
                {post.description}
              </Typography>
              <Link variant="h6" href="#">
                {post.linkText}
              </Link>
            </ThemeProvider>
          </CardContent>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
