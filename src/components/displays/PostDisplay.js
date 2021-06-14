import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//MUI
import { Vote } from '../buttons/Vote';
import { Card, CardContent, Typography, Avatar, Divider, Button } from '@material-ui/core';
import { ModeCommentOutlined as CommentOutlined } from '@material-ui/icons';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import { upvotePost, downvotePost, unUpvotePost, unDownvotePost } from '../../redux/actions/dataActions';

import { Link } from 'react-router-dom';

const styles = (theme) => ({
    ...theme.styles,
})

class PostDisplay extends Component {
    upvotedPost = () => {
        return this.props.user.upvotes && 
            this.props.user.upvotes.find(upvote => upvote === this.props.post.postId);
    }
    downvotedPost = () => {
        return this.props.user.downvotes && 
            this.props.user.downvotes.find(downvote => downvote === this.props.post.postId);
    }
    upvotePost = () => {
        this.props.upvotePost(this.props.post.postId);
    }
    downvotePost = () => {
        this.props.downvotePost(this.props.post.postId);
    }
    unUpvotePost = () => {
        this.props.unUpvotePost(this.props.post.postId);
    }
    unDownvotePost = () => {
        this.props.unDownvotePost(this.props.post.postId);
    }
    render() {
        dayjs.extend(relativeTime);
        const { classes, post : { title, body, username, createdAt, userImageUrl, 
            votes, commentCount, postId }, 
            user: { authenticated } } = this.props;
        const upvoteButton = authenticated ? 
            <Vote onClick={ this.upvotedPost() ? this.unUpvotePost : this.upvotePost }
                upvoted={ this.upvotedPost() } up={ true }/>
            :
            <Link to='/login'><Vote onClick={() => {}} upvoted={ false } up={ true }/></Link>
        const downvoteButton = authenticated ? 
            <Vote onClick={ this.downvotedPost() ? this.unDownvotePost : this.downvotePost }
                upvoted={ this.downvotedPost() } up={ false }/>
            :
            <Link to='/login'><Vote onClick={() => {}} upvoted={ false } up={ false }/></Link>
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
                        <Divider />
                        <Button component={ Link } to={`/posts/${postId}`}><CommentOutlined style={{ fontSize: 20 }}/><Typography variant="subtitle2"> 
                            &nbsp;{ commentCount } Comments</Typography>
                        </Button>
                    </CardContent>
                    <CardContent>
                        { upvoteButton }
                        <Typography variant="h6" style={{ textAlign: 'center' }}>{ votes }</Typography>
                        { downvoteButton }
                    </CardContent>
                </Card>
            </div>
        )
    }
}

PostDisplay.propTypes = {
    user: PropTypes.object.isRequired,
    upvotePost: PropTypes.func.isRequired,
    downvotePost: PropTypes.func.isRequired,
    unUpvotePost: PropTypes.func.isRequired,
    unDownvotePost: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapActionsToProps = {
    upvotePost,
    downvotePost,
    unUpvotePost,
    unDownvotePost
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(PostDisplay));