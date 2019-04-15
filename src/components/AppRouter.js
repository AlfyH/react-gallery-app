import React from 'react'
import Home from './Home'
import Search from './Search'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


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
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default AppRouter;
