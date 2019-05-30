import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import TimeIcon from '@material-ui/icons/AccessTime';
import timeFormat from '../../utils/Time'
import Hidden from '@material-ui/core/Hidden';
import ReactHtmlParser from 'react-html-parser';
import data from '../../news';

const styles = theme => ({
    img: {
        borderRadius: 5,
        width: '100%',
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            height: '200px',
        },
        [theme.breakpoints.up('md')]: {
            height: '500px',
        },
        [theme.breakpoints.up('lg')]: {
            height: '500px',
        },
    },
});

function MediaQuery(props) {
    const { classes } = props;
    console.log(props);
    return (
        <Container fixed>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        { ReactHtmlParser(props.title)}
                    </Grid>
                
                    <Grid item xs={12}>
                        {props.photo ?
                        <CardMedia
                        className={classes.img}
                        image={props.photo}
                        title="Noticia"
                        >
                            <Hidden only={['xs', 'sm']}>
                                <Chip 
                                icon={<TimeIcon />} 
                                label={timeFormat(props.created_at)} 
                                style={{'position':'relative', 'top': 'calc(100% - 32px)', 'left': 'calc(100% - 164px)', 'float':'left'}}
                                />
                            </Hidden>
                            
                        </CardMedia> : ''}
                    </Grid>
                    <Grid item xs={12}>
                        <Hidden only={['md', 'lg', 'xl']}>
                            <Chip icon={<TimeIcon />} label={timeFormat(props.created_at)} style={{'float':'right'}}/>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12}>
                        {ReactHtmlParser(props.description)}
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default withStyles(styles)(MediaQuery);
