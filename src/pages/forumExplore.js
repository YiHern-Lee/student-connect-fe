import React, { Component } from 'react';
import { GridList, GridListTile, Card, CardContent, Typography } from '@material-ui/core';
import { ForumCard } from '../components';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { getForums } from '../redux/actions/dataActions';
import CreateForum from '../components/forums/CreateForum';

const styles = (theme) => ({
    ...theme.styles
})

class forumExplore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forumReq: {
                filter: "createdAt",
                limit: 9
            }
        }
    }

    componentDidMount() {
        this.props.getForums(this.state.forumReq);
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
                            <CreateForum history={ this.props.history }/>
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
    getForums
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(forumExplore));