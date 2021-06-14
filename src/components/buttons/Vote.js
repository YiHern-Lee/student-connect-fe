import React from 'react';
import { IconButton } from '@material-ui/core';
import { ThumbUp as ThumpUpIcon, 
    ThumbUpAltOutlined as ThumbUpOutlined, PlayArrow as PlayArrowIcon, 
    PlayArrowOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';

export const Vote = (props) => {
    return (
        <div>
            <IconButton onClick={props.onClick}>
                {props.upvoted ? 
                    <PlayArrowIcon style={ props.up ? { transform: 'rotate(-90deg)'} : {transform: 'rotate(90deg)'}}/> :
                    <PlayArrowOutlined style={ props.up ? { transform: 'rotate(-90deg)'} : {transform: 'rotate(90deg)'}}/>
                }
            </IconButton>
        </div>
    )
}

Vote.propTypes = {
    up: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}
