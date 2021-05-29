// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings"
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";

const Link = require("react-router-dom").Link;

const Navbar = (props) => {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className="nav-container">
                        <Button color="inherit" component={ Link } to="/"><NavItem icon={<HomeIcon color="primary"/>}/></Button>
                        <Button color="inherit"><NavItem icon={<SettingsIcon color="primary"/>}>
                                <DropdownMenu />
                            </NavItem>
                        </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
