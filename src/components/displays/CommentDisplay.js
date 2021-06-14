import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//MUI
import { Vote } from '../buttons/Vote';
import { Card, CardContent, Typography, Avatar, Divider, Button, ListItem } from '@material-ui/core';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import { upvoteComment, downvoteComment, unUpvoteComment, unDownvoteComment } from '../../redux/actions/dataActions';

import { Link } from 'react-router-dom';

const styles = (theme) => ({
    ...theme.styles,
})

class CommentDisplay extends Component {
    upvotedComment = () => {
        return this.props.user.commentUpvotes && 
            this.props.user.commentUpvotes.find(upvote => upvote === this.props.comment.commentId);
    }
    downvotedComment = () => {
        return this.props.user.commentDownvotes && 
            this.props.user.commentDownvotes
.find(downvote => downvote === this.props.comment.commentId);
    }
    upvoteComment = () => {
        this.props.upvoteComment(this.props.comment.commentId);
    }
    downvoteComment = () => {
        this.props.downvoteComment(this.props.comment.commentId);
    }
    unUpvoteComment = () => {
        this.props.unUpvoteComment(this.props.comment.commentId);
    }
    unDownvoteComment = () => {
        this.props.unDownvoteComment(this.props.comment.commentId);
    }
    render() {
        dayjs.extend(relativeTime);
        const { classes, comment : { body, username, createdAt, userImageUrl, 
            votes }, 
            user: { authenticated } } = this.props;
        const upvoteButton = authenticated ? 
            <Vote onClick={ this.upvotedComment() ? this.unUpvoteComment : this.upvoteComment }
                upvoted={ this.upvotedComment() } up={ true }/>
            :
            <Link to='/login'><Vote onClick={() => {}} upvoted={ false } up={ true }/></Link>
        const downvoteButton = authenticated ? 
            <Vote onClick={ this.downvotedComment() ? this.unDownvoteComment : this.downvoteComment }
                upvoted={ this.downvotedComment() } up={ false }/>
            :
            <Link to='/login'><Vote onClick={() => {}} upvoted={ false } up={ false }/></Link>
        return (
            <div>
                <ListItem className={ classes.commentList }>
                    <CardContent className={ classes.comment }>
                        <div className={ classes.commenterDisplay }>
                            <Avatar style={{ width: 30, height: 30}} src={ userImageUrl } className={ classes.commenterDisplayChild}></Avatar> 
                            <div className={ classes.commenterDisplayChild}> 
                                <Typography variant="body1" >
                                    { username }&nbsp; <Typography variant="caption" color="textSecondary">
                                    { dayjs(createdAt).fromNow() }
                                </Typography>
                                </Typography>
                            </div>
                        </div>
                        <Typography className={classes.commentBody} variant="body1">
                            { body }
                        </Typography>
                    </CardContent>
                    <CardContent>
                        { upvoteButton }
                        <Typography variant="h6" style={{ textAlign: 'center' }}>{ votes }</Typography>
                        { downvoteButton }
                    </CardContent>
                </ListItem>
            </div>
        )
    }
}

CommentDisplay.propTypes = {
    user: PropTypes.object.isRequired,
    upvoteComment: PropTypes.func.isRequired,
    downvoteComment: PropTypes.func.isRequired,
    unUpvoteComment: PropTypes.func.isRequired,
    unDownvoteComment: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    data: state.data
})

const mapActionsToProps = {
    upvoteComment,
    downvoteComment,
    unUpvoteComment,
    unDownvoteComment
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(CommentDisplay));