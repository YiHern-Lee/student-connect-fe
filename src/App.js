import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { home, login, signup } from "./pages/index";
import { Navbar } from "./components/index";
import themeData from './util/theme';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute';

const theme = createMuiTheme(themeData);

let authenticated;
const token = localStorage.FirebaseIdToken;
if (token) {
    const decodedToken = jwtDecode(token);
    // if token is expired
    if (decodedToken.exp * 1000 < Date.now()) {
        // redirect to login page
        window.location.href = '/login'
        authenticated = false;
    } else {
        authenticated = true;
    }
}

function App() {
  return (
    <MuiThemeProvider theme={ theme }>
      <div className="App">
        <Router>
          <div className="container">
            <Navbar />
              <Switch>
                  <Route exact path="/" component={ home }></Route>
                  <AuthRoute exact path="/login" component={login} authenticated={authenticated}></AuthRoute>
                  <AuthRoute exact path="/signup" component={signup} authenticated={authenticated}></AuthRoute>
              </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
