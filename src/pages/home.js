import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { ForumDisplay } from '../components';

class home extends Component {
    state = {
        forums: null
    }

    componentDidMount() {
        axios.get('/forums')
            .then(res => {
                this.setState({
                    forums: res.data
                });
            }).catch(err => {
                console.error(err);
            })
    }

    render() {
        let recentForumsMarkup = this.state.forums ? (
            this.state.forums.map(forum => <ForumDisplay forum={ forum } />)
        ) : <p>Loading...</p>
        return(
            <div>
                <Grid container spacing={10}>
                    <Grid item sm={8} xs={12}>
                        Posts...
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        {recentForumsMarkup}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default home