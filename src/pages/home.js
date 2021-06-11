import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { ForumDisplay, PostDisplay } from '../components';
import { Drawer, List, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
    ...theme.styles,
    drawer: {
        width: 250,
        outline: '10px',
    },
    drawerPaper: {
        width: "inherit",
        paddingTop: 100, // equal to AppBar height
        background: 'transparent',
        outline: '10px',
        borderLeft: 0
    },
})

class home extends Component {
    state = {
        forums: null,
        posts: null
    }

    componentDidMount() {
        axios.get('/forums')
            .then(res => {
                this.setState({
                    forums: res.data
                });
            }).catch(err => console.log(err));
        axios.get('/posts')
            .then(res => {
                this.setState({
                    posts: res.data
                });
            }).catch(err => {
                console.log(err);
            })
    }

    render() {
        const { classes } = this.props;
        console.log(classes)
        let recentForumsMarkup = this.state.forums ? (
            this.state.forums.map(forum => <ForumDisplay key={forum.title} forum={ forum } />)
        ) : <p></p>

        let recentPostsMarkup = this.state.posts ? (
            this.state.posts.map(post => <PostDisplay key={post.postId} post={ post } />)
        ) : <p></p>

        return (
            <div>
                <Grid container spacing={10} justify='flex-end'>
                    <Grid item sm />
                    <Grid item sm={8} xs={12}>
                        {recentPostsMarkup}
                    </Grid>
                    <Grid item sm />
                </Grid>
                <Drawer variant="permanent" anchor="right" className={classes.drawer} 
                    classes={{ paper: classes.drawerPaper}}>
                        <Typography variant='h6' className={ classes.forumHeader }>Forums</Typography>
                        <List className={ classes.list }>{recentForumsMarkup}</List>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(home);