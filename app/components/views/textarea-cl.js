
import React, {PropTypes} from 'react';


class TextAreaCl extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            isEditable: props.isEditable
        };
        this.handleChange = this.handleChange.bind(this);
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
	   		<textarea className="form-control" 
                id={this.state.xid} 
                value={this.state.value} 
                onChange={this.handleChange} 
                rows={this.props.rows}
                disabled={!this.state.isEditable}
            />
	   	);
    }
}

export default TextAreaCl;