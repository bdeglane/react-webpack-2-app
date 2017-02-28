import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Layout from '../component/layout/Layout.jsx';
import IndexPage from '../pages/index/IndexPage.jsx';
import NotFoundPage from '../pages/notFound/NotFoundPage.jsx';

const routes = (
    <Route path="/"
           component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
export default routes;