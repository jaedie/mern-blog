import "./dist/css/App.css";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
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
  return (
    <Router className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/write" component={Write} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/single" component={Single} />
        <Route exact path="/setting" component={Setting} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
