
import React from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/layouts/main-layout';
import GruppeNeu from "./components/views/gruppe-detail";

export default (
	<Router>
		<Route path="/" component={MainLayout}/>

	</Router>
);