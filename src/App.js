import React from "react";
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Projects from './screens/Projects';
import About from './screens/About';
import NavbarSite from "./components/ui/NavbarSite";
import Anasayfa from './screens/Anasayfa';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  const NotFound = () => <div> 404 Not found</div>
  const NotFoundRedirect = () => <Redirect to='/not-found' />
  return (

    <Router>
        <NavbarSite />
        

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Anasayfa />
          </Route>          
          <Route path='/not-found' component={NotFound} />
          <Route path="/about" component={About}  />
          <Route path="/dashboard" component={Projects} />
          <Route component={NotFoundRedirect} />
        </Switch>
       
    </Router>
  );
}

render (<App />,document.getElementById('root'))

// You can think of these components as "pages"
// in your app.


