import React, { Component } from 'react';
import { CommentDisplay, PostComponent } from '../components';
import { Card, Grid, CardContent, Typography, List } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import CommentComponent from '../components/displays/CommentComponent';

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
        let postDisplay = <PostComponent key={post.postId} post={ post } comments={ comments } />;
        return (
            <div>
                <Grid container spacing={10} justify='flex-end'>
                    <Grid item sm />
                    <Grid item sm={8} xs={12}>
                        { postDisplay }
                        <CommentComponent comments={ comments } postId={ post.postId } />
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
