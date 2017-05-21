
import React from 'react';
import { Link } from 'react-router-dom'

export default function(props) {
	console.log(props);
	return (
		<ul className="nav nav-pills nav-stacked">
			<li role="presentation" className="active"><Link to="/gruppen">Gruppen</Link></li>
			<li role="presentation"><a href="#">Profile</a></li>
			<li role="presentation"><a href="#">Messages</a></li>
		</ul>
	);
}