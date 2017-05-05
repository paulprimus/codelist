
import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from '../views/side-bar';

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
					<h1> Schluesselwartung </h1>
				</div>
			</div>
		</div>
	);
}