
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from 'react-router-dom';

import {List, ListItem} from 'material-ui/List';

export default function(props) {

	return (
		<div>
			<div className="flex-grid-vert">
				<List>
					<ListItem primaryText="Observ"/>
					<ListItem primaryText="SCS"/>
					<ListItem primaryText="Start"/>
					<ListItem primaryText="Ramses"/>					
    			</List>
			</div>
		</div>
	)
}