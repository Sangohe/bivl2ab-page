import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';

import timeFormat from '../../utils/Time';
import show from '../../utils/Ucwords';

const useStyles = makeStyles(theme => ({
  listChip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  
}));

const chipColor = {
  'bachiller': {
    backgroundColor: '#17a2b8',
    color: '#fff',
  },
  'profesional': {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  'maestria': {
    backgroundColor: '#28a745',
    color: '#fff',
  },
  'doctorado': {
    backgroundColor: '#ffc107',
    color: '#fff',
  },
  'postDoctorado': {
    backgroundColor: '#dc3545',
    color: '#fff',
  },
}

function ControlledExpansionPanels(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel4');

  

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Basic information</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2} >
            <Grid item xs={4}><Typography className={classes.secondaryHeading}>First name:</Typography></Grid>
            <Grid item xs={8}>{show(props.user.first_name)}</Grid>
            <Grid item xs={4}><Typography className={classes.secondaryHeading}>Last name:</Typography></Grid>
            <Grid item xs={8}>{show(props.user.last_name)}</Grid>
            <Grid item xs={4}><Typography className={classes.secondaryHeading}>Birthday:</Typography></Grid>
            <Grid item xs={8}>{timeFormat(props.user.birth)}</Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Contact information</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2} >
            <Grid item xs={4}><Typography className={classes.secondaryHeading}>Email:</Typography></Grid>
            <Grid item xs={8}><Link to={'mailto:'+props.user.email}>{props.user.email}</Link></Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
        >
          <Typography className={classes.heading}>Education information</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className={classes.listChip}>
          {props.user.education.split(':').map((item, index) => (
            <Chip key={index} label={show(item)} className={classes.chip} style={chipColor[item]}
            />
          ))}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Biography</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.secondaryHeading}>
            {props.user.biography}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default ControlledExpansionPanels;
