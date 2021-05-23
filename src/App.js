import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/"
            component={Home}
            exact
          />
          <Route
            path="/services"
            component={Services}
          />
          <Route
            path="/products"
            component={Products}
          />
          <Route
            path="/sign-up"
            component={SignUp}
          />
        </Switch>
        {/* <h1>First Page</h1>{" "} */}
      </Router>
    </>
  );
}

export default App;
