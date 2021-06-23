import React from 'react';
import { Button, Tooltip, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Follow = (props) => {
    return (
        <div>
            <Tooltip title={ props.followed ? 'Unfollow' : 'Follow' } arrow>
                <Button onClick={ props.onClick } variant={props.followed ? 'contained' : 'outlined' }>
                    { props.followed ? 
                        <Typography>Followed</Typography> :
                        <Typography>Follow</Typography>
                    }
                </Button>
            </Tooltip>
        </div>
    )
}

Follow.propTypes = {
    up: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}
