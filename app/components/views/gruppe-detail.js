
import React from 'react';
import ReactDOM from 'react-dom';

import  TextAreaCl from './textarea-cl';
import  InputCl from './input-cl';
import Dropdown from "./dropdown-cl";

export default function(props) {
	console.log("GruppenDetail");
	return (
		<div>
			<div className="header1"> Neue Gruppe erstellen </div>
			<div className="container-fluid">
				<div className="row">
				    <div className="col-xs-12">
				        <form className="form-horizontal">
				        <div className="form-group">                                 
				            <label htmlFor="id" className="col-xs-2 control-label">ID:</label>                                  
				            <div className="col-xs-1"><InputCl xid="id" xvalue={2} isEditable={false}/></div>                                            
				        </div>
				        <div className="form-group">                                 
				            <label htmlFor="gruppe" className="col-xs-2 control-label">Gruppe:</label>                                  
				            <div className="col-xs-5"><InputCl xid="gruppe" xvalue={2} isEditable={false}/></div>                                            
				        </div>
				        <div className="form-group">                                                
				            <label htmlFor="bezeichnung" className="col-xs-2 control-label">Bezeichnung:</label>                                   
				            <div className="col-xs-5"><TextAreaCl id="bezeichnung" rows="4" xvalue="name" isEditable={false}/></div>                                
				        </div> 
				        <div className="form-group">
					        <label htmlFor="bezeichnung" className="col-xs-2 control-label">Typ:</label>                                   					        
							<div className="col-xs-6">
								<div className="btn-group" role="group" aria-label="...">
								<button type="button" className="btn btn-default">Standard</button>
								<button type="button" className="btn btn-default">Technisch</button>
								<button type="button" className="btn btn-default">Gruppierung</button>
								<button type="button" className="btn btn-default">Systemgruppierung</button>
								<button type="button" className="btn btn-default">Asynchrone Attribute</button>
								</div>				        
							</div>
						</div>
							
				        </form>
				    </div>
				</div>
			</div>
		</div>
	);
}

