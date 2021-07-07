import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { ForumDisplay, PostDisplay } from '../components';
import { List, Typography, Card, Button, CardContent, ListItem } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { getPosts, getForums } from '../redux/actions/dataActions';
import { setHomePage } from '../redux/actions/uiActions';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import HomeSkeleton from '../util/skeletons/HomeSkeleton';

const styles = (theme) => ({
    ...theme.styles
})

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postReq: {
                filter: "createdAt"
            },
            forumReq: {
                filter: "createdAt",
                limit: 5
            }
        }
    }
    componentDidMount() {
        if (this.props.data.page !== 'home') {
            this.props.setHomePage();
            this.props.getPosts(this.state.postReq);
            this.props.getForums(this.state.forumReq);
        }
    }
    
    fetchPostData() {
        this.setState({
            postReq: {
                ...this.state.postReq,
                startAfter: this.props.data.posts[this.props.data.posts.length - 1].postId
            }
        })
        this.props.getPosts(this.state.postReq)
    }

    render() {
        const { classes, data: { posts, forums, loading } } = this.props;
        let recentForumsMarkup = forums ? (
            forums.map(forum => <ForumDisplay key={forum.title} forum={ forum } />)
        ) : <p></p>

        let recentPostsMarkup = posts ? (
            posts.map(post => <PostDisplay key={post.postId} post={ post } />)
        ) : <p></p>

        return (
            loading ? 
            <HomeSkeleton /> :
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
                        <InfiniteScroll
                            dataLength={recentPostsMarkup.length}
                            next={() => this.fetchPostData()}
                            hasMore={true}
                            loader={<Card><CardContent></CardContent></Card>}>
                            {recentPostsMarkup}
                        </InfiniteScroll>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Card>
                            <br />
                            <List className={ classes.list } style={{ padding:'0px 0px 0px 0px' }}>
                                <ListItem className={ classes.forumDisplayList }>
                                    <Typography p={2} variant='h6' className={ classes.forumHeader } color="textPrimary">
                                        Forums
                                    </Typography>
                                </ListItem>
                                {recentForumsMarkup}
                                <Button className={ classes.forumDisplayList } 
                                    component={ Link } 
                                    to={`/forums`}>
                                    <ListItem className={ classes.listItem }>
                                        <Typography variant='body1' color='textSecondary'>View more forums</Typography>    
                                    </ListItem>
                                </Button>
                            </List>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

home.propTypes = {
    data: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
    getForums: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data,
    UI: state.UI
})

const mapActionsToProps = {
    getForums,
    getPosts,
    setHomePage
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(home));