import React, { Component } from 'react';
import { PostDisplay, CommentDisplay } from '../components';
import { Card, Grid, CardContent, Typography, List } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import { connect } from 'react-redux';
import { getPost } from '../redux/actions/dataActions';
import PropTypes from 'prop-types';

const styles = (theme) => ({
    ...theme.styles
})

class post extends Component {

    componentDidMount() {
        const postId = this.props.match.params.postId;
        this.props.getPost(postId);
    }

    render() {
        const { classes, data: { post, comments } } = this.props;
        let postDisplay = <PostDisplay key={post.postId} post={ post } />;
        let commentDisplay = comments ? (comments.map(comment => <CommentDisplay key={comment.commentId} comment={ comment }/>)) 
            : <p></p>
        return (
            <div>
                <Grid container spacing={10} justify='flex-end'>
                    <Grid item sm />
                    <Grid item sm={8} xs={12}>
                        { postDisplay }
                        <Card>
                        <List>
                        { commentDisplay }
                        </List>
                        </Card>
                    </Grid>
                    <Grid item sm />
                </Grid>
            </div>
        )
    }
}

post.propTypes = {
    getPost: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps, { getPost })(withStyles(styles)(post));
