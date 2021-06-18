import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { home, login, signup, forumExplore, forum, post } from "./pages/index";
import { Navbar } from "./components/index";
import themeData from './util/theme';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

import jwtDecode from 'jwt-decode';
import axios from 'axios';

axios.defaults.baseURL = "https://asia-southeast2-student-connect-3d3e3.cloudfunctions.net/api";

const theme = createMuiTheme(themeData);

const logout = () => {
  store.dispatch(logoutUser());
}

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken.exp)
  if (decodedToken.exp * 1000 < Date.now()) {
    logout();
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      <Provider store={ store }>
        <div className="App">
          <Router>
            <div className="container">
              <Navbar logout={ () => logout() }/>
                <Switch>
                    <Route exact path="/forums" component={ forumExplore }></Route>
                    <Route exact path="/forums/:forumId" component={ forum }></Route>
                    <Route exact path="/" component={ home }></Route>
                    <Route exact path="/login" component={ login }></Route>
                    <Route exact path="/signup" component={ signup }></Route>
                    <Route exact path="/posts/:postId" component={ post }></Route>
                </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
