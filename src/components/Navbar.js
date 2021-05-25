import Link from "react-router-dom/Link";

// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Navbar = () => {
    return (
        <div>
            <AppBar position="fixed" className="nav-container">
                <Toolbar>
                        <Button color="inherit" component={ Link } to="/login">Login</Button>
                        <Button color="inherit" component={ Link } to="/">Home</Button>
                        <Button color="inherit" component={ Link } to="/signup">Sign Up</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
