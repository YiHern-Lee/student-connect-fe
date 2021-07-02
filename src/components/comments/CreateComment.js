import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../../redux/actions/dataActions';

// MUI
import { withStyles, TextField, Avatar } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';

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
        const { classes, user: { credentials: { userImageUrl }, authenticated }} = this.props;
        return (
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <Avatar src={ userImageUrl } className={ classes.commentAvatar }></Avatar>
                { authenticated ? 
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
                    placeholder='Write a comment...' 
                    color="secondary"/>
                </form> : 
                <form className={ classes.commentForm }>
                <TextField component={Link} 
                    to={{ pathname: '/login', state: { from: this.props.location.pathname }}}
                    name='body'
                    type='text'
                    label='Comment on post'
                    fullWidth
                    value={ this.state.body }
                    className={ classes.textField }
                    placeholder='Write a comment...' 
                    color="secondary" />
                </form>
                }
            </div>
        )
    }
}

CreateComment.propTypes = {
    createComment: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    UI: state.UI,
    user: state.user
})

export default connect(mapStateToProps, { createComment })(withStyles(styles)(withRouter(CreateComment)));
