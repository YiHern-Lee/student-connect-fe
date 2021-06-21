import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../../redux/actions/dataActions';

// MUI
import { withStyles, TextField, Avatar } from '@material-ui/core';

const styles = (theme) => ({
    ...theme.styles
})

class CreateComment extends Component {
    state = {
        body: '',
        errors: {}
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.UI.errors !== prevProps.UI.errors) {
            this.setState({ errors: this.props.UI.errors })
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createComment({ 
            postId: this.props.postId, 
            body: this.state.body,
        });
        this.setState({ body: '' });
    }
    
    render() {
        const { errors } = this.state;
        const { classes, user: { credentials: { userImageUrl }}} = this.props;
        return (
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <Avatar src={ userImageUrl } className={ classes.commentAvatar }></Avatar>
                <form onSubmit={ this.handleSubmit } className={ classes.commentForm }>
                <TextField name='body'
                    type='text'
                    label='Comment on post'
                    error={ errors.body ? true : false}
                    fullWidth
                    value={ this.state.body }
                    onChange={ this.handleChange }
                    helperText={ errors.body ? errors.body : null }
                    className={ classes.textField }
                    placeholder='Comment on post' />
                </form>
            </div>
        )
    }
}

CreateComment.propTypes = {
    createComment: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    UI: state.UI,
    user: state.user
})

export default connect(mapStateToProps, { createComment })(withStyles(styles)(CreateComment));
