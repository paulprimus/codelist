
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MainLayout from './components/layouts/main-layout';


export default (
	<Router history={browserHistory}>
		<Route path="/" component={MainLayout}/>
	</Router>
);