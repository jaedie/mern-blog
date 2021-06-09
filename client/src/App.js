import React, { useState } from "react";
import "./dist/css/App.css";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Write from "./Pages/Write";
import Signin from "./Pages/Signin";
import Single from "./Pages/Single";
import Setting from "./Pages/Setting";
import Register from "./Pages/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(false);

  return (
    <Router className="App">
      <Nav user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/write" component={user ? Write : Signin} />
        <Route exact path="/signin" component={user ? Home : Signin} />
        <Route exact path="/register" component={user ? Home : Register} />
        <Route exact path="/single/:id" component={Single} />
        <Route exact path="/setting" component={user ? Setting : Signin} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
