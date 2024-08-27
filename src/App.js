import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllProductsPage} />
        <Route path="/product/:productId" component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default App;

// ProductPage.js

// ApiService.js
