import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
// import requireAuth from '../components/controllers/requireAuth'

import Main from '../Main';
import Home from '../components/home/home'
import Pasta from '../components/pastas/pastas';
import Bread from '../components/breads/bread';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import NotFound from '../components/notfound/notfound';
import Bag from '../components/bag/bag';
import Login from '../components/login/login';
import Checkout from '../components/checkout/checkout';
import Account from '../components/account/account';
import Logout from '../components/logout/logout';


const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/pasta" component={Pasta} />
            <Route path="/bread" component={Bread} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" compnent={Bag} />
            <Route path="/login" component={Login} />
            <Route path="/logout" compnent={Logout} />
            <Route path="*" component={NotFound} />
            <Route path="/checkout" component={Checkout}  />
            <Route path="/account" component={Account} />
        </Route>
    </Router>
);
export default Routes;