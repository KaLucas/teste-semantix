import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

export class Nav extends React.Component {
  render() {
    return (
      <nav>
        <NavLink to='/' activeClassName="active" exact>Semantix</NavLink>
        <NavLink to='/' activeClassName="active" exact><i className="img1"></i>Page 1</NavLink>
        <NavLink to='/page2' activeClassName="active"><i className="img2"></i>Page 2</NavLink>
      </nav>
    );
  }
}