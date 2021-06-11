import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

const styles = (theme) => ({
    ...theme.styles,
})

class PostDisplay extends Component {
    render() {
        dayjs.extend(relativeTime);
        const { classes, post : { title, body, username, createdAt, userImageUrl } } = this.props
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        <div className={classes.posterDisplay}>
                            <Avatar src={ userImageUrl } className={ classes.posterDisplayChild}></Avatar> 
                            <div className={ classes.posterDisplayChild}> 
                                <Typography className={ classes.posterDisplayChildTextTop} variant="h6" >
                                    { username } 
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                    { dayjs(createdAt).fromNow() }
                                </Typography>
                            </div>
                        </div>
                        <Typography className={classes.postTitle} variant="h5">
                            { title }
                        </Typography>
                        <Typography paragraph className={classes.postBody} variant="body1">
                            { body }
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(PostDisplay);