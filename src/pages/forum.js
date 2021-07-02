import React, { Component } from 'react';
import { PostDisplay } from '../components';
import { Card, Grid, CardContent, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import { connect } from 'react-redux';
import { getForumPosts, followForum, unfollowForum, setForumPage } from '../redux/actions/dataActions';
import PropTypes from 'prop-types';
import CreatePost from '../components/posts/CreatePost';
import { Follow } from '../components/buttons/Follow';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
    ...theme.styles
})

class forum extends Component {

    componentDidMount() {
        const forumId = this.props.match.params.forumId;
        if (this.props.data.page !== forumId) {
            this.props.setForumPage(forumId)
            this.props.getForumPosts(forumId);
        }
    }

    follow = (forumId) => {
        this.props.followForum(forumId);
    }

    unfollow = (forumId) => {
        this.props.unfollowForum(forumId);
    }

    followedForum = () => {
        return this.props.user.forumFollows && 
            this.props.user.forumFollows.find(forum => forum === this.props.data.info.title);
    }

    render() {
        const { data: { info, posts, loading }, user: { authenticated } } = this.props;
        let forumPostsMarkup = posts ? (
            posts.map(post => <PostDisplay key={post.postId} post={ post } />)
            ) : <p></p>;
        const followButton = authenticated ? 
        <Follow onClick={ this.followedForum() ? () => this.unfollow(info.title) : () => this.follow(info.title) }
            followed={ this.followedForum() }/>
        :
        <Link to={{ pathname: '/login', state: { from: this.props.location.pathname }}}>
            <Follow onClick={() => {}} followed={ false }/>
        </Link>
        return (
            
            <div>
                <Grid container spacing={10} justify='flex-end'>
                    <Grid item sm />
                    <Grid item sm={8} xs={12}>

                        { loading ? <p>Loading</p> : (
                            <div>
                                <Card>
                                <CardContent style={{ display: 'flex' }}>
                                    <div>
                                        <Typography variant='h5'>
                                            { info.title }
                                        </Typography>
                                        <Typography variant='body2'>
                                            { info.faculty }
                                        </Typography>
                                    </div>
                                    <div style={{ marginLeft: 'auto' }}>
                                        { followButton }
                                    </div>
                                </CardContent>
                            </Card>
                            <br />
                            <Card>
                                <CardContent style={{ display: 'flex', padding: '0px 10px 0px 0px' }}>
                                    <div style={{ marginLeft: 'auto' }}>
                                        <CreatePost id={ info.title }/>
                                    </div>
                                </CardContent>
                            </Card>
                            <br />
                            {forumPostsMarkup} 
                            </div>)}
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
    data: state.data,
    user: state.user
})

const mapActionsToProps = {
    getForumPosts,
    followForum,
    unfollowForum,
    setForumPage
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(forum));
