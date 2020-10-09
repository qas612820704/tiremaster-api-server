import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainPost from './MainPost';
// import FeaturePosts from './FeaturePosts';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  home: {},
}));

const mainPost = [
  {
    index: '0',
    title: '輪胎大師最新消息',
    description:
      '疫情最初在2019年12月於中華人民共和國湖北省武漢市被發現, 隨後在2020年初迅速擴散至全球多國，逐漸變成一場全球性大瘟疫，被多個國際組織及傳媒形容為自第二次世界大戰以來全球面臨的最嚴峻危機以及史上最嚴重的公共衛生事件。',
    image: 'https://source.unsplash.com/random',
    imgText: 'Image description',
    linkText: '了解更多.....',
  },
];

const featurePosts = [
  {
    title: '輪胎大師消息一',
    date: 'Nov 12',
    description:
      '嚴重特殊傳染性肺炎疫情，是一次由嚴重急性呼吸系統症候群冠狀病毒2型（SARS-CoV-2）所引發的全球大流行疫情。',
    image: 'https://source.unsplash.com/random',
    linkText: '了解更多.....',
  },
  {
    title: '輪胎大師消息二',
    date: 'Nov 11',
    description:
      '嚴重特殊傳染性肺炎疫情，是一次由嚴重急性呼吸系統症候群冠狀病毒2型（SARS-CoV-2）所引發的全球大流行疫情。',
    image: 'https://source.unsplash.com/random',
    linkText: '了解更多.....',
  },
];

// const posts = [post1, post2, post3];

export default function Home() {
  // Check to see if the counter has been initialized
  if (typeof Home.postIndex == 'undefined') {
    // It has not... perform the initialization
    Home.postIndex = 0;
  }
  const classes = useStyles();
  const currentPost = mainPost[Home.postIndex];
  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <Typography component="div" className={classes.home}>
          <MainPost post={currentPost} />
        </Typography>
        {/*<Typography component="div">
          <Grid container>
            {featurePosts.map((post) => (
              <FeaturePosts key={post.title} post={post} />
            ))}
          </Grid>
            </Typography>*/}
      </Container>
    </React.Fragment>
  );
}
