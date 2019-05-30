import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import { Editor } from '@tinymce/tinymce-react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import New from './new'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Camera from '@material-ui/icons/CameraAlt';
import Fab from '@material-ui/core/Fab';
import CameraAlt from '@material-ui/icons/CameraAlt';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    fab: {
        position: 'relative',
        bottom: theme.spacing(5),
        right: theme.spacing(5),
    },
    nav: {
        flexGrow: 1,
        maxWidth: 500,
    },
    input: {
        display: 'none',
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    media: {
        maxHeight: 500,
        minHeight: 300,
        maxWidth: 500,
        minWidth: 300,
    },
}));

function CreateNew(props) {
    const classes = useStyles();
    const [name, setName] = React.useState(null);
    const [title, setTitle] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [photo, setPhoto] = React.useState(null);
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
        console.log(newValue)
    }

    const titleChange = (e) => {
        setTitle(e.target.getContent())
    }

    const descriptionChange = (e) => {
        setDescription(e.target.getContent())
    }

    const photoChange = (event) => {
        setPhoto(URL.createObjectURL(event.target.files[0]));
        setName(event.target.files[0].name)
    }

    return (
      <div className={classes.root}>
        <Container fixed>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper square className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="fullWidth"
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab icon={<PhoneIcon />} aria-label="Phone" />
                            <Tab icon={<FavoriteIcon />} aria-label="Favorite" />
                        </Tabs>
                    </Paper>
                </Grid>
                {value === 0 && 
                <Grid item xs={12}>
                    <Grid item xs={12}>
                        <h4> Title: </h4>
                        <Editor onChange={titleChange} initialValue={title}/>
                    </Grid>
                    <Grid item xs={12}>
                        <h4> Description: </h4>
                        <Editor onChange={descriptionChange} initialValue={description}/>
                    </Grid>
                    <Grid item xs={12}>
                        <h4> Photo: {name}</h4>
                        <input
                            accept="image/*"
                            id="text-button-file"
                            type="file"
                            className={classes.input}
                            onChange={photoChange}
                        />
                    </Grid>
                </Grid>}
                {value === 1 && 
                <Grid item xs={12}>
                    <New title={title} description={description} photo={photo} created_at={new Date()}></New>
                </Grid>}
                {value === 0 && 
                <label htmlFor="text-button-file" style={{'position':'relative', 'top': 'calc(100% - 56px)', 'left': 'calc(100% - 56px)'}}  >
                    <Fab component="span" color="secondary" aria-label="Add" className={classes.fab}>
                        <CameraAlt />
                    </Fab>
                </label>}
            </Grid>
        </Container>
      </div>
    );
  }

export default CreateNew;
