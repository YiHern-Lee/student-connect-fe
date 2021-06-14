import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { ForumDisplay, PostDisplay } from '../components';
import { List, Typography, Card, Button } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { getAllPosts, getAllForums } from '../redux/actions/dataActions';

const Link = require("react-router-dom").Link;

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
    componentDidMount() {
        this.props.getAllPosts();
        this.props.getAllForums();
    }

    render() {
        const { classes, data: { posts, forums } } = this.props;
        let recentForumsMarkup = forums ? (
            forums.map(forum => <ForumDisplay key={forum.title} forum={ forum } />)
        ) : <p></p>

        let recentPostsMarkup = posts ? (
            posts.map(post => <PostDisplay key={post.postId} post={ post } />)
        ) : <p></p>

        return (
            <div>
                <Grid container spacing={10} justify='flex-end'>
                    <Grid item sm={8} xs={12}>
                        <Card>
                            <br />
                                <div style={{ textAlign: "center" }}>
                                    <Typography variant='h5'>Trending Posts</Typography>
                                </div>
                            <br />
                        </Card>
                        <br />
                        {recentPostsMarkup}
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card>
                            <br/>
                            <Button className={ classes.forumDisplayList } component={Link} to={'/forums'}>
                                <Typography p={2} variant='h6' className={ classes.forumHeader } color="textPrimary">
                                    Forums
                                </Typography>
                            </ Button>
                            <List className={ classes.list }>{recentForumsMarkup}</List>
                        </Card>
                    </Grid>
                </Grid>
                
                        

            </div>
        );
    }
}

home.propTypes = {
    data: PropTypes.object.isRequired,
    getAllPosts: PropTypes.func.isRequired,
    getAllForums: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data,
    UI: state.UI
})

const mapActionsToProps = {
    getAllPosts,
    getAllForums
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(home));