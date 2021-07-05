import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { getUserData, setUserPage } from '../redux/actions/dataActions';
import { CurrentProfileDisplay } from '../components';
import { ProfileDisplay, PostDisplay } from '../components';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import PostSkeleton from '../util/skeletons/PostSkeleton';
import ProfileSkeleton from '../util/skeletons/ProfileSkeleton';

const styles = (theme) => ({
    ...theme.styles
})

class user extends Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        if (this.props.data.page !== `user=${userId}`) {
            this.props.setUserPage(userId);
            this.props.getUserData(userId);
        }
    }

    componentDidUpdate(prevProps) {
        const prevId = prevProps.match.params.userId;
        const currId = this.props.match.params.userId;
        if (prevId !== currId) {
            this.props.setUserPage(currId);
            this.props.getUserData(currId);
        }
    }

    render() {
        const { classes, data: { info, posts, loading }} = this.props;
        const profileMarkup = this.props.match.params.userId === this.props.user.credentials.userId ? 
            (<CurrentProfileDisplay />) : (<ProfileDisplay user={ info }/>)
        const postMarkup = posts.length > 0 ? posts.map(post => <PostDisplay key={post.postId} post={post} />) 
            : <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography variant='body1'>User has not uploaded any post</Typography>
                </CardContent>
            </Card>
        return (
            loading ? <div>
                <Grid container spacing={10}>
                    <Grid item sm={4} xs={12}> <ProfileSkeleton /> </Grid>
                    <Grid item sm={8} xs={12}> <PostSkeleton /> </Grid>
                </Grid>
            </div> 
            :
            <div>
                <Grid container spacing={10}>
                    <Grid item sm={4} xs={12}> { profileMarkup } </Grid>
                    <Grid item sm={8} xs={12}> { postMarkup } </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
    user: state.user
});

const mapActionsToProps = {
    getUserData,
    setUserPage
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(user))
