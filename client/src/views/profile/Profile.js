import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PersonalData from './PersonalData'
import CollapseProduct from './CollapseProduct';
import Hidden from '@material-ui/core/Hidden';
import User from '../../data';
import show from '../../utils/Ucwords'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  media: {
    maxHeight: 500,
    minHeight: 300,
  },
  avatar: {
    backgroundColor: red[500],
  },  
  name: {
    color: '#fff',
  }
});

function FullWidthGrid(props) {
  const { classes } = props;
  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={User.photo}
                  title="Contemplative Reptile"
                >
                </CardMedia>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography className={classes.heading}>{show(User.first_name)} {show(User.last_name)}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Hidden only={['sm', 'xs']}>
              <CollapseProduct projects={User.projects}></CollapseProduct>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={8}>
            <PersonalData user={User}></PersonalData>
            <Hidden only={['md', 'lg', 'xl']}>
              <CollapseProduct projects={User.projects}></CollapseProduct>
            </Hidden>
          </Grid> 
          
        </Grid>
      </div>
    </Container>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);