import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Navigation } from '../../src/components';

function App() {
  return (
    <div className="App">

{/* * Create 3 `<Route />` setting their `path` prop equal to `/`, `/about`, `/contact` with their respective components.
* Be sure to incluce the `exact` prop on the root component for `/` to make sure that it's rendering the exact component and not all the other components. */}

      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Contact" component={Contact}/>

    </div>
  );
}

export default App;
