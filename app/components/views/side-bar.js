
import React from 'react';

export default function(props) {
	console.log(props);
	return (
		<ul className="nav nav-pills nav-stacked">
			<li role="presentation" className="active"><a href="#">Gruppen</a></li>
			<li role="presentation"><a href="#">Profile</a></li>
			<li role="presentation"><a href="#">Messages</a></li>
		</ul>
	);
}