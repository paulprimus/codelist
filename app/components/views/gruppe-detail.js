
import React from 'react';
import ReactDOM from 'react-dom';

import  TextAreaCl from './textarea-cl';
import  InputCl from './input-cl';

export default function(props) {

	return (
		<div>
			<div className="container-fluid">
				<div className="row">
				    <div className="col-xs-12">
				        <form className="form-horizontal">
				        <div className="form-group">                                 
				            <label htmlFor="checkNumber" className="col-xs-1 control-label">Nummer:</label>                                  
				            <div className="col-xs-1"><InputCl xid="checkNumber" xvalue={2} isEditable={false}/></div>                                            
				        </div>
				        <div className="form-group">                                                
				            <label htmlFor="beschreibung" className="col-xs-1 control-label">Beschreibung:</label>                                   
				            <div className="col-xs-5"><TextAreaCl id="beschreibung" rows="4" xvalue="name" isEditable={false}/></div>                                
				        </div> 
				        </form>
				    </div>
				</div>
			</div>
		</div>
	);
}

