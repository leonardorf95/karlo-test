import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import PrivateRoute from './PrivateRoute';

import Main from './components/layout/Main';

import SingUp from './components/auth/SingUp';
import SingIn from './components/auth/SingIn';

import Products from './components/produts/Products';
import FormNewProduct from './components/produts/FormNewProduct';
import FormEditProduct from './components/produts/FormEditProduct';

import Purchases from './components/purchase/Purchases';
import FormNewPurchase from './components/purchase/FormNewPurchase';
import DetailPurchase from './components/purchase/DetailPurchase';

import Users from './components/users/Users';
import FormNewUser from './components/users/FormNewUser';
import FormEditUser from './components/users/FormEditUser';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Provider store={store}>
          <Switch>            
            <Route exact path='/auth/singup' component={SingUp} />
            <Route exact path='/auth/singin' component={SingIn} />

            <PrivateRoute exact path='/' component={Main} />
            <PrivateRoute exact path='/products/' component={Products} />
            <PrivateRoute exact path='/products/new' component={FormNewProduct} />
            <PrivateRoute exact path='/products/edit/:id' component={FormEditProduct} />

            <PrivateRoute exact path='/purchase/' component={Purchases} />
            <PrivateRoute exact path='/purchase/new' component={FormNewPurchase} />
            <PrivateRoute exact path='/purchase/detail/:id' component={DetailPurchase} />

            <PrivateRoute exact path='/users/' component={Users} />
            <PrivateRoute exact path='/users/new' component={FormNewUser} />
            <PrivateRoute exact path='/users/detail/:id' component={FormEditUser} />
          </Switch>
        </Provider>
      </Router>
    </Fragment>
  )
}

export default App;
