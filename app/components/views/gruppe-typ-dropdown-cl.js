
import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class GruppeTypDropdown extends React.Component {


  	constructor(props) {
	    super(props);
	    this.state = {value: 1};
  	}

  	handleChange(event, index, value) {
  		this.setState({value});
  	}

	render() {

		return (
			<div>
        	<DropDownMenu value={this.state.value} onChange={this.handleChange} style={{widht: 500}}>
				<MenuItem value={1} primaryText="Normale Gruppe" />
				<MenuItem value={2} primaryText="Gruppen Gruppierung" />
				<MenuItem value={3} primaryText="System Gruppe" />
				<MenuItem value={4} primaryText="Asynchrone Attribute" />
		     </DropDownMenu>
			</div>
		);
	}
}

export default GruppeTypDropdown;