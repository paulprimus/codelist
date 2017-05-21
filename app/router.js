
import React from "react";
import {BrowserRouter, Route, Switch, Match } from 'react-router-dom';
import MainLayout from './components/layouts/main-layout';
import Gruppen from "./components/views/gruppen";
import GruppenContainer from "./components/container/gruppen-container";
import GruppeNeu from "./components/views/gruppe-detail";

export default (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={MainLayout}/>
			<Route exact path="/gruppen" component={MainLayout}/>
			<Route exact path="/gruppen/neu" component={MainLayout}/>
		</Switch>
	</BrowserRouter>
);