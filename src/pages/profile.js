import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import { Grid, Button, Link as MuiLink,  Typography, Paper, Tooltip } from '@material-ui/core';
import ClassIcon from '@material-ui/icons/Class';
import MyButton from '../util/MyButton';
import ProfileSkeleton from '../util/ProfileSkeleton';
import EditDetails from '../components/displays/EditDetails';

import LocationOn from '@material-ui/icons/LocationOn';
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';

import { connect } from 'react-redux';
/* import { logoutUser, uploadImage } from '../redux/actions/userActions'; */

const styles = (theme) => ({
    ...theme.styles
  });

class profile extends Component {
    handleImageChange = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        this.props.uploadImage(formData);
    };
    handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    };
    handleLogout = () => {
        this.props.logoutUser();
    };

    render() {
        const { classes,
            user: {
                credentials: { username, createdAt, userImageUrl, bio, major, userId },
                loading,
                authenticated
            }
        } = this.props;

        let profileMarkup = !loading ? (
            authenticated ? (
                <Paper className={classes.paper}>
                    <div className={classes.profile}>
                        <div className={ classes.profileImageWrapper }>
                            <img src={userImageUrl} alt="profile" className={ classes.profileImage } />
                            <input
                                type="file"
                                id="imageInput"
                                hidden="hidden"
                                onChange={this.handleImageChange}
                            />
                            <Tooltip title='Edit profile picture' arrow>
                            <Button className={ classes.editImageButton } onClick={ this.handleEditPicture }>
                                <EditIcon color="primary" />
                            </Button>
                            </Tooltip>
                        </div>
                        <div className={ classes.profileDetails }>
                            <MuiLink
                                component={Link}
                                to={`/users/${userId}`}
                                color="primary"
                                variant="h5">
                                @{username}
                            </MuiLink>
                            <br />
                            <br />
                            {bio && <Typography variant="body1">{bio}</Typography>}
                            <br />
                            {major && (
                                <Fragment>
                                    <ClassIcon color="primary" />&nbsp;&nbsp;
                                    <span style={{ paddingBottom: '10px' }}>{major}</span>
                                    <br />
                                </Fragment>
                            )}
                            <br />
                            <CalendarToday color="primary" />&nbsp;&nbsp;
                            <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
                        </div>
                        <MyButton tip="Logout" onClick={this.handleLogout}>
                            <KeyboardReturn color="primary" />
                        </MyButton>
                        <EditDetails />
                    </div>
                </Paper>
            ) : (
                <Paper className={classes.paper}>
                    <Typography variant="body2" align="center">
                        No profile found, please login again
                    </Typography>
                        <div className={classes.buttons}>
                            <Button
                                variant="contained"
                                color="primary"
                                component={Link}
                                to="/login">
                                Login
                            </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    component={Link}
                                    to="/signup"
                                >
                                    Signup
                            </Button>
                        </div>
                    </Paper>
                )
        ) : (
                <ProfileSkeleton />
            );

        return profileMarkup;

    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

profile.propTypes = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(profile));