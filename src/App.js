import React from 'react';
import './App.css';
import Layout from './containers/hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
            <Switch>
              <Route path="/" exact component={BurgerBuilder} />
              <Route path="/checkout" exact component={Checkout}/>
            </Switch>
           
        </Layout>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
