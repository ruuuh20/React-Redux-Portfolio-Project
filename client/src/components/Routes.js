import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

const Routes = (props) =>
  <Router>
    <div>
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink style={{ marginRight: '10px' }} to="/search">Search Listings</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
      </div>
      <Route path="/" render={() => <h3>Welcome to the NYC Apartment Search App</h3>} />
      <Route path="/search" component={SearchPage} />
    </div>
  </Router>;

export default Routes;
