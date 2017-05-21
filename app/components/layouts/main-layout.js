
import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from '../views/side-bar';
import GruppenContainer from '../container/gruppen-container';
import GruppeNeu from "../views/gruppe-detail";
import { Route, Switch } from 'react-router-dom';


export default function(props) {
	console.log("MainLayout");
	const { match } = props;
	return (
		<div className="app">
			<div className="my-navbar">
			</div>
			<div className="app-container">
				<div className="left-area">
					<SideBar/>		
				</div>
				<div className="main-area">		
					<Switch>	
						<Route exact path="/" component={GruppenContainer}/>
						<Route exact path="/gruppen" component={GruppenContainer}/>
						<Route exact path="/gruppen/neu" component={GruppeNeu}/>
					</Switch>
				</div>
			</div>
		</div>
	);
}