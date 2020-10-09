import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '600px',
    // width: '700px',
    margin: theme.spacing(6, 6, 6),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Tips() {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.root}>
      <Container maxWidth="sm">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Tips"
              image="/static/tip_example_01.jpg"
              title="Tips"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {'輪胎大師小知識'}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {
                  '男生的蛋蛋正常來說都會是一邊高一邊低，雖然沒有實際統計數據(好啦其實是我找不到)，但據說只要是右撇子男生，那蛋蛋幾乎都會呈現「右高左低」的分布喔！'
                }
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ height: '40px' }}>
            <Button size="small" color="primary">
              {'更多小知識'}
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Typography>
  );
}
