import React from 'react'
import Button from "@material-ui/core/Button";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const DropdownMenu = () => {

    const DropdownItem = (props) => {
        return (
            <a href={props.link} className="menu-item">
                {props.children}

                <span className="icon-button">{ props.rightIcon }</span>
            </a>
        );
    }

    return (
        <div className="dropdown">
            <DropdownItem rightIcon={<ArrowRightIcon />} link="/login">Login</DropdownItem>
            <DropdownItem rightIcon={<ArrowRightIcon />} link="/signup">Sign Up</DropdownItem>
        </div>
    )
}

export default DropdownMenu
