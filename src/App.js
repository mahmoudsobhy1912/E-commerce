import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
<<<<<<< HEAD
              <li><Link to="/Cart">Cart</Link></li>
              <li><Link to="/Signin">Sign In</Link></li>
=======
              <li className ="sign"><Link to="/Signin">Sign In</Link></li>
>>>>>>> cd30d4f27b28096e808113c2df4a5400464be71c
              <li><Link to="/Signup">Sign Up</Link></li>
            </ul>
          </nav>
        </header>
        <main>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/Signin" component={Signin}></Route>
              <Route path="/Signup" component={Signup}></Route>
              <Route path="/Cart" component={Cart}></Route>
              <Route path="/Home/:id" component={Product}></Route>
            </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
