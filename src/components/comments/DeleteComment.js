<<<<<<< HEAD:src/components/comments/DeleteComment.js
import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//MUI
import { Dialog, DialogTitle, Typography, DialogActions, Button, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { deleteComment } from '../../redux/actions/dataActions';

const styles = (theme) => ({
    ...theme.styles
})

class DeleteComment extends Component {
    state = {
        open: false
    };
    handleOpen = () => {
        this.setState({ open: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    deleteComment = () => {
        this.props.deleteComment(this.props.commentId);
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
                                Are you sure you want to delete this comment?
                            </Typography>
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={ this.handleClose } style={{ textTransform: 'none' }}>
                                <Typography color='error'>Cancel</Typography>
                            </Button>
                            <Button onClick={ this.deleteComment } style={{ textTransform: 'none' }}>
                                <Typography color='secondary'>Delete</Typography>
                            </Button>
                        </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

DeleteComment.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
}

export default connect(null, { deleteComment })(withStyles(styles)(DeleteComment));
=======
import React, { Component, Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//MUI
import { Dialog, DialogTitle, Typography, DialogActions, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { deleteComment } from '../../redux/actions/dataActions';

const styles = (theme) => ({
    ...theme.styles
})

class DeleteComment extends Component {
    state = {
        open: false
    };
    handleOpen = () => {
        this.setState({ open: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    DeleteComment = () => {
        this.props.deleteComment(this.props.commentId);
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
                                Are you sure you want to delete this comment?
                            </Typography>
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={ this.handleClose } color='primary'>
                                Cancel
                            </Button>
                            <Button onClick={ this.DeleteComment } color='default'>
                                Delete
                            </Button>
                        </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

DeleteComment.propTypes = {
    DeleteComment: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired
}

export default connect(null, { deleteComment })(withStyles(styles)(DeleteComment));
>>>>>>> b2b7af50f021ccb02c1f51fc72d9bae086a0fad7:src/components/buttons/DeleteComment.js
