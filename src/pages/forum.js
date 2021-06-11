import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { PostDisplay } from '../components';
import { List, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import { connect } from 'react-redux';
import { getForumPosts } from '../redux/actions/dataActions';
import PropTypes from 'prop-types';

const styles = (theme) => ({
    ...theme.styles
})

export class forum extends Component {

    componentDidMount() {
        const forumId = this.props.match.params.forumId;
        this.props.getForumPosts(forumId);
    }

    render() {
        const { classes, data: { info: { title, faculty }, posts} } = this.props;
        let forumPostsMarkup = posts ? (
            posts.map(post => <PostDisplay key={post.postId} post={ post } />)
            ) : <p></p>;
        return (
            <div>
                <Grid container spacing={10} justify='flex-end'>
                    <Grid item sm />
                    <Grid item sm={8} xs={12}>
                        {forumPostsMarkup}
                    </Grid>
                    <Grid item sm />
                </Grid>
            </div>
        )
    }
}

forum.propTypes = {
    getForumPosts: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps, { getForumPosts })(withStyles(styles)(forum));
