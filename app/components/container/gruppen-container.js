

import React from 'react';
import { connect } from 'react-redux';
import Gruppen from '../views/gruppen';
import * as gruppenApi from '../../api/gruppen-api';

class GruppenContainer extends React.Component {

    componentDidMount() {
        gruppenApi.fetchGruppen();
    }
    
    render() {
        return (
            <Gruppen {...this.props.sg}  />
        );
    }
}

const mapStateToProps = function(store) {
    return {
        sg: store.gruppenState
    };
};

export default connect(mapStateToProps)(GruppenContainer);