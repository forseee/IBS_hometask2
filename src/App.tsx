import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import { Products } from './pages/Products/Products';
import { CartOfProduct } from './pages/CartOfProduct/CartOfProduct';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Products />} />
        <Route path="/item/:itemId?" render={() => <CartOfProduct />} />
      </Switch>
    </>
  );
};

export default App;
