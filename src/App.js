import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { home, login, signup } from "./pages/index";
import { Navbar } from "./components/index";
import themeData from './util/theme';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

// Redux

import jwtDecode from 'jwt-decode';
import axios from 'axios';

axios.defaults.baseURL = "https://asia-southeast2-student-connect-3d3e3.cloudfunctions.net/api";

const theme = createMuiTheme(themeData);


const token = localStorage.FBIdToken;
let authenticated;
if (token) {
  authenticated = true;
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login';
    localStorage.removeItem('FBIdToken');
    authenticated = false;
  }
}

function App() {
  return (
    <MuiThemeProvider theme={ theme }>
      <div className="App">
        <Router>
          <div className="container">
            <Navbar authenticated={ authenticated }/>
              <Switch>
                  <Route exact path="/" component={home}></Route>
                  <Route exact path="/login" component={login}></Route>
                  <Route exact path="/signup" component={signup}></Route>
              </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
