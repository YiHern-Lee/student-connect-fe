import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { home, login, signup } from "./pages/index";
import { Navbar } from "./components/index";

function App() {
  return (
    <div className="App">
        <Router>
          <div className="container">
            <Navbar />
              <Switch>
                  <Route exact path="/" component={ home }></Route>
                  <Route exact path="/login" component={ login }></Route>
                  <Route exact path="/signup" component={ signup }></Route>
              </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
