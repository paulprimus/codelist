
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from 'react-router-dom';


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
					{gruppen.map((gruppe, index) => {
						return (
						<tr key={index}>
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
			<div className="aktion-controls">
				<ul className ="pager">   
                    <li className="next menu-item"><Link to="/gruppen/neu" >Neu</Link></li> 
                </ul>
			</div>

		
		</div>
	);
}

function handleBtnNeuClick() {
	console.log("klick!");
}
