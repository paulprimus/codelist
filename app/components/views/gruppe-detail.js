
import React from 'react';
import ReactDOM from 'react-dom';

import  TextAreaCl from './textarea-cl';
import  InputCl from './input-cl';

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
					        <div className="col-xs-2">
						        <div className="dropdown">
								    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" >
								      Dropdown-Menü
								     <span className="caret"></span>
								    </button>
								    <ul className="dropdown-menu">
								      <li><a href="#">Dropdown-Link</a></li>
								      <li><a href="#">Dropdown-Link</a></li>
								    </ul>
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

