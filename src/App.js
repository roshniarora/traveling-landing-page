import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";

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
        </Switch>
        {/* <h1>First Page</h1>{" "} */}
      </Router>
    </>
  );
}

export default App;
