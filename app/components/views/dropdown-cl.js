
import React from 'react';

class Dropdown extends React.Component {

	render() {

		return (
			<select value = "Pizza" size="2">
				<option value="P101">Pizza Napoli</option>
		      	<option value="P102">Pizza Funghi</option>  		
			</select>
		);
	}
}

export default Dropdown;