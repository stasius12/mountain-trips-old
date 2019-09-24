import React from 'react';
import { Route } from 'react-router-dom';

import TripList from './containers/TripListView';
import TripDetail from './containers/TripDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={TripList} />
        <Route exact path='/articles/:articleID' component={TripDetail} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
    </div>
)

export default BaseRouter;