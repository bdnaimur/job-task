import React, { lazy,Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Spinner from '../helper/Spinner';

const Home = lazy(() => import('../pages/Home'));

const Routers = () => {
    return (
        <Suspense fallback={<Spinner />}>
        <Router>
          <Switch>
            <Route>
                <Home/>
            </Route>
          </Switch>
        </Router>
      </Suspense>
    );
};

export default Routers;