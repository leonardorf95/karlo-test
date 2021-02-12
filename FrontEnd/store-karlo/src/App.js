import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import Main from './components/layout/Main';

import SingUp from './components/auth/SingUp';
import SingIn from './components/auth/SingIn';
import ForgotPassword from './components/auth/ForgotPassword';

import Products from './components/produts/Products';
import FormNewProduct from './components/produts/FormNewProduct';
import FormEditProduct from './components/produts/FormEditProduct';

import Purchases from './components/purchase/Purchases';
import Purchase from './components/purchase/Purchase';
import FormNewPurchase from './components/purchase/FormNewPurchase';

import Users from './components/users/Users';
import FormNewUser from './components/users/FormNewUser';
import FormEditUser from './components/users/FormEditUser';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/auth/singup' component={SingUp} />
            <Route exact path='/auth/singin' component={SingIn} />
            <Route exact path='/auth/forgot' component={ForgotPassword} />

            <Route exact path='/products/' component={Products} />
            <Route exact path='/products/new' component={FormNewProduct} />
            <Route exact path='/products/edit/:id' component={FormEditProduct} />

            <Route exact path='/purchase/' component={Purchases} />
            <Route exact path='/purchase/new' component={FormNewPurchase} />
            <Route exact path='/purchase/:id' component={Purchase} />

            <Route exact path='/users/' component={Users} />
            <Route exact path='/users/new' component={FormNewUser} />
            <Route exact path='/users/edit/:id' component={FormEditUser} />
          </Switch>
        </Provider>
      </Router>
    </Fragment>
  )
}

export default App;
