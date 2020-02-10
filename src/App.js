import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Login from "./Views/Login";
import Register from "./Views/Register";
import NoMatch from "./Views/NoMatch";
import Home from "./Views/Home";
import Layout from "./Components/Layout";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <React.Fragment>
      <Layout>
      <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
