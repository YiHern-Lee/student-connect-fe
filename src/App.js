import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { home, login, signup } from "./pages/index";
import { Navbar } from "./components/index";
import themeData from './util/theme';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute';
// redux 
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

const theme = createMuiTheme(themeData);

const token = localStorage.FirebaseIdToken;
if (token) {
    const decodedToken = jwtDecode(token);
    // if token is expired
    if (decodedToken.exp * 1000 < Date.now()) {
        // redirect to login page
        store.dispatch(logoutUser);
        //window.location.href = '/login'
        
    } else {
        store.dispatch({ type: SET_AUTHENTICATED });
        axios.defaults.headers.common['Authentication'] = token;
        store.dispatch(getUserData());
    }
}

function App() {
  return (
      <MuiThemeProvider theme={theme}>
      <Provider store={store}>
          <div className="App">
            <Router>
              <div className="container">
                <Navbar />
                  <Switch>
                      <Route exact path="/" component={ home }></Route>
                      <AuthRoute exact path="/login" component={login} ></AuthRoute>
                      <AuthRoute exact path="/signup" component={signup} ></AuthRoute>
                  </Switch>
              </div>
            </Router>
              </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
