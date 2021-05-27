import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/social-media.png';
import axios from 'axios';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
    form: {
        textAlign: 'centre'
    },
    image: {
        width: 100,
        height: 100,
        margin: '20px auto 20px auto'
    },
    button: {
        marginTop: 20
    },
    customError: {
        color: 'red',
        fontSize:'0.8rem'
    }
};

class login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
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
        axios.post('https://asia-southeast2-student-connect-3d3e3.cloudfunctions.net/api/login', userData)
            .then(res => {
                console.log(res.data);
                this.setState({
                    loading: false
                });
                this.props.history.push('/')
            })
            .catch(err => {
                this.setState({
                    errors: err.data,
                    loading: false
                })
            })
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
                    <p> Login </p>
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
                        <Button type="submit" variant="contained" color="default" className={classes.button}> Login </Button>
                    </form>
                </Grid>
            </Grid>

        );
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login);
