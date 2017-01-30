import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';

import Main from '../Main';
import Home from '../components/home/home'
import Pasta from '../components/pastas/pastas';
import Bread from '../components/breads/bread';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import NotFound from '../components/notfound/notfound';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/pasta" component={Pasta} />
            <Route path="/bread" component={Bread} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);
export default Routes;