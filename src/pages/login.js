import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/social-media.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import themeData from '../util/theme';

const styles = {
    ...themeData
}

class login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
            loading: false
        };
    }

    // upon submitting the email and password
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/login', userData)
            // res.data is a dictionary containing the authentication token
            .then(res => {
                localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
                this.setState({
                    loading: false
                });
            }).then(() => {
                this.props.history.push('/')
            })
            .catch(err => {
                console.error(err.response.data)
                this.setState({
                    // err.response is a dictionary containing data, config, headers, request, status, status text.
                    // err.response.data is a dictionary containing email or password (depends whats wrong)
                    errors: err.response.data,
                    loading: false
                })
            });
    }

    // fills in the textfield with what you typed in
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { classes } = this.props;
        const { errors, loading } = this.state;

        return (
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item sm>
                    <img src={AppIcon} alt='social' className={classes.image} />
                    <Typography variant="h2" className={classes.pageTitle}>Login</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            className={classes.textField}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            value={this.state.email}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            className={classes.textField}
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            value={this.state.password}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        {errors.general && (
                            <Typography variant="body2" className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button type="submit" 
                            variant="contained" 
                            color="default" 
                            className={classes.button}
                            disabled={loading}>
                             Login 
                        { loading && (<CircularProgress size={30} className={classes.progress} />) } </Button>
                        <br />
                        <small>
                            Don't have an account? Sign up <Link to="/signup">here</Link>
                        </small>

                    </form>
                </Grid>
                <Grid item sm />
            </Grid>

        );
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login);
