
import React from 'react';
import ReactDOM from 'react-dom';

export default function(props) {
	console.log(props);
	return (
		<div>
				
			<div className="header1"> Gruppen </div>
			
			<div>
				<table className = "table table-striped table-hover">
					<thead>
					<tr>
						<th>ID</th>
						<th>Gruppe</th>
						<th>Bezeichnung</th>
						<th>Beschreibung</th>
					</tr>
					</thead>
				</table>
			</div>
		</div>
	);
}

