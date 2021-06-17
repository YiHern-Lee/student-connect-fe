import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
// MUI
import { IconButton, Button, TextField, Dialog, 
    DialogContent, DialogTitle, CircularProgress, Tooltip } from '@material-ui/core';
import { Add as AddIcon, Close as CloseIcon } from '@material-ui/icons';
import { connect } from 'react-redux';
import { createPost } from '../../redux/actions/dataActions';

const styles = (theme) => ({
    ...theme.styles
})

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            title: '',
            body: '',
            errors: {},
            id: props.id
        };
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.UI.errors !== prevProps.UI.errors) {
            this.setState({ errors: this.props.UI.errors })
        }
        if (prevProps.UI.errors || prevProps.UI.loading) {
            if (!this.props.UI.errors && !this.props.UI.loading) {
                this.setState({ title: '', body: ''});
                this.handleClose();
            }
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false, errors: {} });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createPost({ title: this.state.title, 
            body: this.state.body,
            forum: this.state.id })
    }

    render() {
        const { errors } = this.state;
        const { classes, UI: { loading }, user: { credentials: { username }, authenticated }} = this.props;
        return (
            <Fragment>
                <Tooltip title='Create a post' arrow>
                    { authenticated ? 
                    (<IconButton onClick={ this.handleOpen }>
                        <AddIcon/>
                    </IconButton>) : 
                    (<IconButton component={ Link } 
                        to={{ pathname: '/login', state: { from: this.props.location.pathname }}}>
                        <AddIcon/>
                    </IconButton>)}              
                    
                </Tooltip>
                <Dialog open={ this.state.open } 
                    onClose={ this.handleClose } 
                    fullWidth maxWidth='sm'>
                    <CloseIcon onClick={ this.handleClose } className={ classes.closeButton }/>
                    <DialogTitle>Create a new post</DialogTitle>
                    <DialogContent>
                        <form onSubmit={ this.handleSubmit }>
                            <TextField
                                name='title'
                                type='text'
                                label='Post title'
                                multiline
                                rows='1'
                                placeholder={ `What would you like to discuss?`}
                                error={ errors.title ? true : false }
                                helperText={ errors.title ? errors.title : null }
                                className={ classes.textField }
                                onChange={ this.handleChange }
                                fullWidth />
                            <TextField
                                name='body'
                                type='text'
                                label='Post body'
                                multiline
                                rows='2'
                                rowsMax='8'
                                placeholder={ `Share your thoughts, ${username}!`}
                                error={ errors.body ? true : false }
                                helperText={ errors.body ? errors.body : null }
                                className={ classes.textField }
                                onChange={ this.handleChange }
                                fullWidth />
                            <Button type="submit" variant="contained" color="primary"
                                className={ classes.submitButton } disabled={ loading }>
                                Submit
                                { loading &&
                                    (<CircularProgress 
                                        size={ 30 } 
                                        className={ classes.progress }/>) }
                                </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}

CreatePost.propTypes = {
    createPost: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    UI: state.UI,
    user: state.user
});

export default connect(mapStateToProps, { createPost })(withStyles(styles)(withRouter(CreatePost)));
