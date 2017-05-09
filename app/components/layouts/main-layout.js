
import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from '../views/side-bar';
import GruppenContainer from '../container/gruppen-container';


export default function() {
	return (
		<div className="app">
			<div className="my-navbar">
			</div>
			<div className="app-container">
				<div className="left-area">
					<SideBar/>		
				</div>
				<div className="main-area">			
					<GruppenContainer/>
				</div>
			</div>
		</div>
	);
}