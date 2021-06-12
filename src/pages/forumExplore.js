import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { ForumCard } from '../components';
import { List } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
    ...theme.styles
})

class forum extends Component {
    state = {
        forums: null,
    }

    componentDidMount() {
        axios.get('/forums')
            .then(res => {
                this.setState({
                    forums: res.data
                });
            }).catch(err => console.log(err));
        }
    render() {
        const { classes } = this.props;
        let recentForumsMarkup = this.state.forums ? (
            this.state.forums.map(forum => <ForumCard key={forum.title} forum={ forum } />)
        ) : <p></p>
        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item sm={6} xs={8} className={ classes.forumGrid } >
                        <List className={ classes.list }>{recentForumsMarkup}</List>
                    </Grid>
                </Grid> 
            </div>
        )
    }
}

export default withStyles(styles)(forum);