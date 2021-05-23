import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

import Home from "./components/Home/Home";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      <main className="vh-100 bg-secondary">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Accessibility Tool</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="h4 navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item mx-3 px-2">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>

                <li class="nav-item mx-3 px-2">
                  <a class="nav-link" aria-current="page" href="#">Text to Speech</a>
                </li>

                <li class="nav-item mx-3 px-2">
                  <a class="nav-link" aria-current="page" href="#">Speech to Text</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
