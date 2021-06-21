import React, { Component } from 'react';
import { PostDisplay } from '../components';
import { Card, Grid, CardContent, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

import { connect } from 'react-redux';
import { getForumPosts } from '../redux/actions/dataActions';
import PropTypes from 'prop-types';
import CreatePost from '../components/displays/CreatePost';

const styles = (theme) => ({
    ...theme.styles
})

class forum extends Component {

    componentDidMount() {
        const forumId = this.props.match.params.forumId;
        this.props.getForumPosts(forumId);
    }

    render() {
        const { classes, data: { info, posts, loading } } = this.props;
        let forumPostsMarkup = posts ? (
            posts.map(post => <PostDisplay key={post.postId} post={ post } />)
            ) : <p></p>;
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
    data: state.data
})

export default connect(mapStateToProps, { getForumPosts })(withStyles(styles)(forum));
