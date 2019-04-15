import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const AppRouter = (props) => {
  return (
    <Router>
      <div className = "navDiv">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Route path="/home" exact component={Home} />
      <Route path="/search" exact component={Home} />
    </Router>
  );
}

export default AppRouter;
