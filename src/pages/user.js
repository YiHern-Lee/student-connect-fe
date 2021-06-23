import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { getUserData } from '../redux/actions/dataActions';
import { CurrentProfileDisplay } from '../components';
import { ProfileDisplay, PostDisplay } from '../components';
import { Grid } from '@material-ui/core';

const styles = (theme) => ({
    ...theme.styles
})

class user extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.props.getUserData(userId);
    }

    render() {
        const { classes, data: { info, posts }} = this.props;
        const profileMarkup = this.props.match.params.userId === this.props.user.credentials.userId ? 
            (<CurrentProfileDisplay />) : (<ProfileDisplay user={ info }/>)
        const postMarkup = posts.map(post => <PostDisplay key={post.postId} post={post} />)
        return (
            <div>
                <Grid container container spacing={10}>
                    <Grid item item sm={4} xs={12} >{profileMarkup}</Grid>
                    <Grid item item sm={8} xs={12}>{postMarkup}</Grid>
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
    getUserData
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(user))
