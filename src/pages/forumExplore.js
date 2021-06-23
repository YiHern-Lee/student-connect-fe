import React, { Component } from 'react';
import { GridList, GridListTile, Card, CardContent, Typography } from '@material-ui/core';
import { ForumCard } from '../components';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { getAllForums } from '../redux/actions/dataActions';

const styles = (theme) => ({
    ...theme.styles
})

class forumExplore extends Component {

    componentDidMount() {
        this.props.getAllForums();
    }
    render() {
        const { classes, data: { forums }} = this.props;
        let recentForumsMarkup = forums ? (
            forums.map(forum => (<GridListTile cols={1} key={forum.title}>
                    <ForumCard key={forum.title} forum={ forum } />
                </GridListTile>))
        ) : <p></p>
        return (
            <div>
                <Card style={{ marginBottom: '3%' }}>
                    <CardContent style={{ display: 'flex' }}>
                        <div style={{ marginRight: 'auto' }}>
                            <Typography variant="h5">Forums</Typography>
                        </div>
                        <div style={{ marginLeft: 'auto' }}>
                            <typography>Hi</typography>
                        </div>
                    </CardContent>
                </Card>
                <GridList cellHeight={160} className={ classes.gridList } cols={3} spacing={50}>
                    {recentForumsMarkup}
                </GridList> 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data
})

const mapActionsToProps = {
    getAllForums
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(forumExplore));