import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Container } from '@material-ui/core';
import { Facebook, Twitter } from '@material-ui/icons';
import ImagePost from './ImagePost';
import MainPost from './MainPost';
import post from './post.md';
import ServicePost from './SevicePost';

const useStyles = makeStyles((theme) => ({
  aboutImage: {
    marginTop: theme.spacing(3),
  },
  aboutContent: {
    marginTop: theme.spacing(3),
  },
}));

const imagePost = {
  title: '輪胎大師汽車輪胎保養場',
  description: '輪胎大師提供最專業的汽車輪胎保養維修',
  image: 'https://source.unsplash.com/random',
  imgText: 'Image description',
  linkText: '了解更多.....',
};

const sidebar = {
  title: '故事起源',
  description:
    '這裡可以說一些輪胎大師的起源故事。這裡可以說一些輪胎大師的願景。這裡可以說一些輪胎大師的特色。',
  social: [
    { name: 'Twitter', icon: Twitter },
    { name: 'Facebook', icon: Facebook },
  ],
};

export default function About() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.aboutImage} maxWidth="lg">
        <ImagePost post={imagePost} />
        <div className={classes.aboutContent}>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/*<MainPost title="" post={post} />*/}
            <ServicePost />
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
