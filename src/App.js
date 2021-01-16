import React from "react";
import "./app.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/searchpage";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

        <Route path="/search">
            {/* search page */}
            <SearchPage />
        </Route>

        <Route path="/">
            {/* Home page  */}
            <Home />
        </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
