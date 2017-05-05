import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './components/layouts/main-layout';


// Provider is a top-level component that wrapps our entire application, including
// the Router. We pass it a reference to the store so we can use react-redux's
// connect() method for Component Containers.
ReactDOM.render(
	<MainLayout/>,
	document.getElementById('root')
);