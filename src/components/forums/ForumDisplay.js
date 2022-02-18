<<<<<<< HEAD:src/components/forums/ForumDisplay.js
import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

//MUI
import Typography from '@material-ui/core/Typography';
import { Button, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
    ...theme.styles
})

class ForumDisplay extends Component {
    render() {
        const { classes, forum : { faculty, title } } = this.props
        return (
            <div>
                <Button className={ classes.forumDisplayList } component={ Link } to={`/forums/forum/${title}`}>
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

=======
import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

//MUI
import Typography from '@material-ui/core/Typography';
import { Button, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
    ...theme.styles
})

class ForumDisplay extends Component {
    render() {
        const { classes, forum : { faculty, title } } = this.props
        return (
            <div>
                <Button className={ classes.forumDisplayList } component={ Link } to={`/forums/${title}`}>
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

>>>>>>> b2b7af50f021ccb02c1f51fc72d9bae086a0fad7:src/components/displays/ForumDisplay.js
export default withStyles(styles)(ForumDisplay);