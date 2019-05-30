import ListItem from '@material-ui/core/ListItem';
import React from 'react';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import Logout from '@material-ui/icons/ExitToApp';
import Home from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
// import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    padding: theme.spacing(0)
}));

function ListItemBar(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={[classes.toolbar, classes.padding]}></div>
            <List>
                <ListItem button key={'Home'}>
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText primary={'Home'} ></ListItemText>
                </ListItem>
                <ListItem button key={'Logout'}>
                    <ListItemIcon><Logout /></ListItemIcon>
                    <ListItemText primary={'Logout'} ><Logout/></ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default ListItemBar;