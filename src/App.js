import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Signin">Sign In</Link></li>
              <li><Link to="/Signup">Sign Up</Link></li>
            </ul>
          </nav>
        </header>
        <main>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/Signin" component={Signin}></Route>
              <Route path="/Signup" component={Signup}></Route>
            </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
