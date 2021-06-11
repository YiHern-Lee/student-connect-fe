import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

//MUI
import Typography from '@material-ui/core/Typography';
import { Button, ListItem } from '@material-ui/core';

const Link = require("react-router-dom").Link;

const styles = {
    card: {
        display: 'flex'
    }
}

class ForumDisplay extends Component {
    render() {
        const { classes, forum : { faculty, title } } = this.props
        return (
            <div>
                <Button style={{ textTransform: 'none'}} component={ Link } to={`/forums/${title}`}>
                    <ListItem className={ classes.listItem }>
                            <div>
                            <Typography className={ classes.forumTitle } variant="h6">
                                { title }
                            </Typography>
                            <Typography className={ classes.forumDescription } variant="body2" color="textSecondary">
                                { faculty }
                            </Typography>
                            </div>
                    </ListItem>
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(ForumDisplay);