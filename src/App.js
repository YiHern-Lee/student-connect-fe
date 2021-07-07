import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { home, login, signup, forumExplore, forum, post, user } from "./pages/index";
import { Navbar } from "./components/index";
import themeData from './util/theme';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

// Redux
import { useSelector } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getCurrentUserData } from './redux/actions/userActions';
import { setDarkMode, setLightMode } from './redux/actions/uiActions';

import jwtDecode from 'jwt-decode';
import axios from 'axios';

/* axios.defaults.baseURL = "http://localhost:5001/student-connect-3d3e3/asia-southeast2/api"; */
axios.defaults.baseURL = "https://asia-southeast2-student-connect-3d3e3.cloudfunctions.net/api";

const logout = () => {
  store.dispatch(logoutUser());
}

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    logout();
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getCurrentUserData());
  }
}

const App = () => {
  const UI = useSelector(state => state.UI);

  useEffect(() => {
    if (!UI.theme) 
      localStorage.getItem('theme') === 'dark' ? store.dispatch(setDarkMode()) : store.dispatch(setLightMode());
  });

  return (
    <MuiThemeProvider theme={ createMuiTheme(themeData(UI.theme === 'dark')) }>
      <CssBaseline />
        <div className="App">
          <Router>
            <div className="container">
              <Navbar />
                <Switch>
                    <Route exact path="/forums" component={ forumExplore }></Route>
                    <Route exact path="/forums/:forumId" component={ forum }></Route>
                    <Route exact path="/" component={ home }></Route>
                    <Route exact path="/login" component={ login }></Route>
                    <Route exact path="/signup" component={ signup }></Route>
                    <Route exact path="/posts/:postId" component={ post }></Route>
                    <Route exact path="/users/:userId" component={ user }></Route>
                </Switch>
            </div>
          </Router>
        </div>
    </MuiThemeProvider>
  );
}

export default App;
