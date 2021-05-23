import React, { createContext, useState } from "react";
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
import TexttoSpeech from "./components/TexttoSpeech/TexttoSpeech";
import SpeechtoText from "./components/SpeechtoText/SpeechtoText";

export const UserTextData = createContext([]);
function App() {
  const [allText, setAllText] = useState([]);

  return (
    <Router>
      <main className="vh-100 bg-secondary">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="h4 nav navbar-brand" href="#">ACCESSIBILITY  TOOL</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="h4 nav-item mx-3 px-2">
                  <Link class="nav-link active" aria-current="page" to="/home">HOME</Link>
                </li>

                <li class="h4 nav-item mx-3 px-2">
                  <Link class="nav-link" aria-current="page" to="/texttospeech">TEXT TO SPEECH</Link>
                </li>

                <li class="h4 nav-item mx-3 px-2">
                  <Link class="nav-link" aria-current="page" to="/speechtotext">SPEECH TO TEXT</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <UserTextData.Provider value={UserTextData}>
            <Route path="/texttospeech">
              <TexttoSpeech />
            </Route>

            <Route path="/speechtotext">
              <SpeechtoText />
            </Route>

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </UserTextData.Provider>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
