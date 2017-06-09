
import React from 'react';
import ReactDOM from 'react-dom';

import  TextAreaCl from './textarea-cl';
import  InputCl from './input-cl';
import GruppeTypDropdown from "./gruppe-typ-dropdown-cl";
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export default function(props) {
	console.log("GruppenDetail");
	return (
		<div>
			<div className="header1"> Neue Gruppe erstellen </div>
				<div className="flex-grid-horiz">	
					<div className="gruppen-panel">
						<div className="flex-grid-vert">
							<div className="flex-grid-horiz">			
								<TextField floatingLabelText="ID" style={{ width:60, marginRight:20}} />									
								<TextField floatingLabelText="Name" style={{width:300, marginRight:10}}/>									
							</div>
							<TextField floatingLabelText="Bezeichnung" style={{ width:500, marginRight:10}}/>								
							<TextField floatingLabelText="Beschreibung" rows={2} multiLine={true} style={{ width:500, marginRight:10}}/>			
							<TextField floatingLabelText="Organisation" style={{ width:500, marginRight:10}}/>
						</div>	
				
					<div className="flex-grid-horiz">
						<div className="col"><Checkbox label="Bearbeitbar" style={styles.checkbox}/></div>
						<div className="col"><Checkbox label="Beendbar" style={styles.checkbox}/></div>
						<div className="col"><Checkbox label="Bezeichnung bearbeitbar" style={styles.checkoxExtraWidth}/></div>
					</div>
					<div className="flex-grid-horiz">
						<div className="col"><Checkbox label="Neuanlegbar" style={styles.checkbox}/></div>
						<div className="col"><Checkbox label="Schluessel bearbeitbar" style={styles.checkoxExtraWidth}/></div>
						<div className="col"><Checkbox label="Grossbuchstaben" style={styles.checkbox}/></div>
					</div>
					
					<div className="flex-grid-horiz">			
						<GruppeTypDropdown/>
	        		</div>
	        	</div>
	        	<div className="gruppen-panel2">
	        		<div className="flex-grid-vert">
						<div className="col"><Checkbox label="Neuanlegbar" style={styles.checkbox}/></div>
						<div className="col"><Checkbox label="Schluessel bearbeitbar" style={styles.checkoxExtraWidth}/></div>
						<div className="col"><Checkbox label="Grossbuchstaben" style={styles.checkbox}/></div>
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