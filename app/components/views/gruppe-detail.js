
import React from 'react';
import ReactDOM from 'react-dom';

import  TextAreaCl from './textarea-cl';
import  InputCl from './input-cl';
import GruppeTypDropdown from "./gruppe-typ-dropdown-cl";
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';


export default function(props) {
	console.log("GruppenDetail");
	return (
		<div>
			<div className="header1"> Neue Gruppe erstellen </div>
			<div>
				<div className="flex-grid">
				
					<div className="col">
						<TextField floatingLabelText="ID" style={{ width: 50, marginRight:2}} />
					</div>
					<div className="col">
						<TextField floatingLabelText="Name" style={{marginRight:10}}/>
					</div>
					<div className="col">
						<TextField floatingLabelText="Bezeichnung" style={{ width:400, marginRight:10}}/>
					</div>
				</div>
				<div className="flex-grid">
					<div className="col">
						<TextField floatingLabelText="Beschreibung" rows={2} multiLine={true} style={{ width:500, marginRight:10}}/>
					</div>
					<div className="col">
						<TextField floatingLabelText="Organisation" style={{ width:400, marginRight:10}}/>
					</div>
				</div>
			
				<div className="flex-grid">
					<div className="col">
						<Checkbox label="Bearbeitbar" style={styles.checkbox} />
					</div>
					<div className="col">
						<Checkbox label="Beendbar" style={styles.checkbox} />
					</div>
					<div className="col">
						<Checkbox label="Bezeichnung bearbeitbar" style={styles.checkoxExtraWidth} />
					</div>
					<div className="col">
						<Checkbox label="Neuanlegbar" style={styles.checkbox} />
					</div>
					<div className="col">
						<Checkbox label="Schluessel bearbeitbar" style={styles.checkoxExtraWidth} />
					</div>
					<div className="col">
						<Checkbox label="Grossbuchstaben" style={styles.checkbox} />
					</div>
				</div>
				<div className="flex-grid">
					<div className="col" style={{widht: 500}}>
						<GruppeTypDropdown/>
		        	</div>
        		</div>
			</div>
		</div>
	);
}

const styles = {
	block: {
		maxWidth: 250,
	},
	checkbox: {
		marginTop: 20,
		marginBottom: 16,
		marginRight: 20
	},
	checkoxExtraWidth: {
		marginTop: 20,
		marginBottom: 16,
		marginRight: 20,
		width:230
	}
};


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