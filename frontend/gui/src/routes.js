import React from 'react';
import { Route } from 'react-router-dom';

import TripList from './containers/TripListView';
import TripDetail from './containers/TripDetailView';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={TripList} />
        <Route exact path='/:articleID' component={TripDetail} />
    </div>
)

export default BaseRouter;