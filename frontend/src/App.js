import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from './Pages/Home/Home';
import MainLogin from './Pages/Login/mainLogin';

function App() {
  return (
    <div>
      <Router>
        <Switch>


          <Route exact path='/home' component={Home} />
          <Route exact path='/mainLogin' component={MainLogin} />

          <Redirect to='/mainLogin' component={MainLogin} />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
