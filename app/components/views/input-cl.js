
import React from 'react';
import PropTypes from 'prop-types';


class InputCl extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: "",
            isEditable: props.isEditable
        };
    }

	handleChange(event) {
        if (this.state.isEditable == true) {
            this.setState({value: event.target.value});
        }
	}

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.xvalue, isEditable: nextProps.isEditable});
    }

    render() {    	
	   return (
	   		<input className="form-control" 
            disabled={!this.state.isEditable}
            id={this.state.xid} 
            value={this.state.value} onChange={this.handleChange} type="text" />
	   	);
    }
}
InputCl.propTypes = {

  id: PropTypes.number
}
export default InputCl;