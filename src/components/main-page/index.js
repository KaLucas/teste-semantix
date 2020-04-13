import React from 'react';
import './index.css';
import { Nav } from '../nav/nav.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page1 from '../pages/page1.js';
import Page2 from '../pages/page2.js';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <main className="flex">
            <Nav />
            <section>
              <Switch>
                <Route path="/" component={Page1} exact/>
                <Route path="/page2" component={Page2} />
              </Switch>
            </section>
        </main>
      </Router>
    );
  }
}
