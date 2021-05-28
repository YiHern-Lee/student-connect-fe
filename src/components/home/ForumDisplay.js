import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
                <Card>
                    <CardContent>
                        <Typography variant="h5">
                            { title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            { faculty }
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(ForumDisplay);