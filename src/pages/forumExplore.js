import React, { Component } from 'react';
import { GridList, GridListTile, Card, CardContent, Typography } from '@material-ui/core';
import { ForumCard } from '../components';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { getForums } from '../redux/actions/dataActions';
import { setForumExplorePage } from '../redux/actions/uiActions';
import CreateForum from '../components/forums/CreateForum';
import InfiniteScroll from 'react-infinite-scroll-component';
import ForumExploreSkeleton from '../util/skeletons/ForumExploreSkeleton';

const styles = (theme) => ({
    ...theme.styles
})

class forumExplore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forumReq: {
                filter: "createdAt",
                limit: 12
            }
        }
    }

    componentDidMount() {
        this.props.setForumExplorePage();
        this.props.getForums(this.state.forumReq);
    }

    loadMoreForum = () => {
        this.setState({
            forumReq: {
                ...this.state.forumReq,
                startAfter: this.props.data.forums[this.props.data.forums.length - 1].title
            }
        })
        this.props.getForums(this.state.forumReq)
    
    }

    render() {
        const { classes, data: { forums, loading }} = this.props;
        let recentForumsMarkup = forums ? (
            forums.map(forum => (<GridListTile cols={1} key={forum.title}>
                    <ForumCard key={forum.title} forum={ forum } />
                </GridListTile>))
        ) : <p></p>
        return (
            loading ? <ForumExploreSkeleton />
            :
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
                <InfiniteScroll
                        dataLength={recentForumsMarkup.length}
                        hasMore
                        next={() => this.loadMoreForum()} />
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
    getForums,
    setForumExplorePage
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(forumExplore));