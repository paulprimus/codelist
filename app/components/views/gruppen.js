
import React from 'react';
import ReactDOM from 'react-dom';

export default function(props) {
	console.log(props);
	let gruppen = [];
	if (props.sg !== undefined) {
		gruppen = props.sg;
	}
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
					<tbody>
					{gruppen.map(gruppe => {
						return (
						<tr>
							<td>{gruppe.id}</td>
							<td>{gruppe.gruppe}</td>
							<td>{gruppe.bezeichnung}</td>
							<td>{gruppe.beschreibung}</td>
						</tr>
						);
					})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

