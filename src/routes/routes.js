import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
// import requireAuth from '../components/controllers/requireAuth'

import Main from '../Main';
import Home from '../components/home/home'
import Pasta from '../components/pastas/pastas';
import Bread from '../components/breads/bread';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import YourBag from '../components/yourbag/yourbag';
import Checkout from '../components/checkout/checkout';
import Account from '../components/account/account';
import NotFound from '../components/notfound/notfound';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/pasta" component={Pasta} />
            <Route path="/bread" component={Bread} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/your-bag" component={YourBag} />
            <Route path="/checkout" component={Checkout}  />
            <Route path="/account" component={Account} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);
export default Routes;