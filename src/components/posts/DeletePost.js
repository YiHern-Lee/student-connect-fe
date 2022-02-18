<<<<<<< HEAD:src/components/posts/DeletePost.js
import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//MUI
import { Dialog, DialogTitle, Typography, DialogActions, Button, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { deletePost } from '../../redux/actions/dataActions';

const styles = (theme) => ({
    ...theme.styles
})

class DeletePost extends Component {
    state = {
        open: false
    };
    handleOpen = () => {
        this.setState({ open: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    deletePost = () => {
        this.props.deletePost(this.props.postId);
        this.setState({ open: false });
    }
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <MenuItem onClick={ this.handleOpen }
                    className={ classes.deleteButton } >
                    Delete
                </MenuItem>
                <Dialog open={ this.state.open } 
                    onClose={ this.handleClose }
                    fullWidth
                    maxWidth='sm'>
                        <DialogTitle>
                            <Typography>
                                Are you sure you want to delete this post?
                            </Typography>
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={ this.handleClose } style={{ textTransform: 'none' }}>
                                <Typography color='error'>Cancel</Typography>
                            </Button>
                            <Button onClick={ this.deletePost } style={{ textTransform: 'none' }}>
                                <Typography color='secondary'>Delete</Typography>
                            </Button>
                        </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

DeletePost.propTypes = {
    deletePost: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired
}

export default connect(null, { deletePost })(withStyles(styles)(DeletePost));
=======
import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//MUI
import { Dialog, DialogTitle, Typography, DialogActions, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { deletePost } from '../../redux/actions/dataActions';

const styles = (theme) => ({
    ...theme.styles
})

class DeletePost extends Component {
    state = {
        open: false
    };
    handleOpen = () => {
        this.setState({ open: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    deletePost = () => {
        this.props.deletePost(this.props.postId);
        this.setState({ open: false });
    }
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <Button onClick={ this.handleOpen }
                    className={ classes.deleteButton} >
                    Delete
                </Button>
                <Dialog open={ this.state.open } 
                    onClose={ this.handleClose }
                    fullWidth
                    maxWidth='sm'>
                        <DialogTitle>
                            <Typography>
                                Are you sure you want to delete this post?
                            </Typography>
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={ this.handleClose } color='primary'>
                                Cancel
                            </Button>
                            <Button onClick={ this.deletePost } color='default'>
                                Delete
                            </Button>
                        </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

DeletePost.propTypes = {
    deletePost: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired
}

export default connect(null, { deletePost })(withStyles(styles)(DeletePost));
>>>>>>> b2b7af50f021ccb02c1f51fc72d9bae086a0fad7:src/components/buttons/DeletePost.js
