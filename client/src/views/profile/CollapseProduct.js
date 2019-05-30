import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import { Editor } from '@tinymce/tinymce-react';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    img: {
        width: 500,
        height: 200,
        borderRadius: 5,
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
}));

function ControlledExpansionPanels(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel0');

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {/* <Editor/> */}
            <h4> Products </h4>
            {props.projects.map((item, index) => (
                <ExpansionPanel key={index} expanded={expanded === 'panel'+index} onChange={handleChange('panel'+index)}>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>{item.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <CardMedia
                        className={classes.img}
                        image={item.img}
                        title="Contemplative Reptile"
                        />
                    </ExpansionPanelDetails>
                    <ExpansionPanelActions>
                        <Button size="small" color="primary">
                            Learn more
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
            ))}
        
        </div>
    );
}

export default ControlledExpansionPanels;
