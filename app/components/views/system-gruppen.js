
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

export default function(props) {

	return (
		<div>
			<div className="flex-grid-vert">
				<List>
					<ListItem leftCheckbox={<Checkbox />}primaryText="Alle Gruppen"/>		
					<ListItem leftCheckbox={<Checkbox />}primaryText="ASTI"/>					
					<ListItem leftCheckbox={<Checkbox />} primaryText="OBServ"/>
					<ListItem leftCheckbox={<Checkbox />} primaryText="SCS"/>
					<ListItem leftCheckbox={<Checkbox />} primaryText="SmartCube (Start)"/>
					<ListItem leftCheckbox={<Checkbox />}primaryText="SmartCube SCOM"/>					
					<ListItem leftCheckbox={<Checkbox />}primaryText="Start"/>
    			</List>
			</div>
		</div>
	)
}