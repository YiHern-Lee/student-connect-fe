import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    image: {
        minWidth: 200,
    }, 
    content: {
        padding: 25
    }

}

class PostDisplay extends Component {
    render() {
        const { classes, post : { title, body, username, createdAt, imageUrl } } = this.props
        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia image={imageUrl} title="Profile Picture" className={classes.image}/>
                    <CardContent className={classes.content}>
                        <Typography variant="h6">
                            { username }
                        </Typography>
                        <Typography variant="h5">
                            { title }
                        </Typography>
                        <Typography variant="body1">
                            { body }
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            { createdAt }
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(PostDisplay);