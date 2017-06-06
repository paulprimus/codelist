
import React from 'react';
import ReactDOM from 'react-dom';

import  TextAreaCl from './textarea-cl';
import  InputCl from './input-cl';
import Dropdown from "./dropdown-cl";
import TextField from 'material-ui/TextField';


export default function(props) {
	console.log("GruppenDetail");
	return (
		<div>
			<div className="header1"> Neue Gruppe erstellen </div>
			<div>
				<div className="flex-grid">
					<div className="col">
						ID: 
					</div>
					<div className="col">
						<TextField hintText="ID Gruppe" floatingLabelText="ID Gruppe" />
					</div>
				</div>
			</div>
		</div>
	);
}

/*

 <form className="form-horizontal">
					        <div className="form-group">                                 
					            <label htmlFor="id" className="control-label">ID:</label>                                  
					            <div ><InputCl xid="id" xvalue={2} isEditable={false}/></div>                                            
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
									<Dropdown/>
								</div>
							</div>
							
				        </form>
*/