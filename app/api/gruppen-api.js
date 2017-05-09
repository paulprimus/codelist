

import axios from 'axios';
import store from '../store';
import { getGruppen } from '../actions/gruppen-actions';
import {serverurl} from "../utils/api-utils";

export function fetchGruppen(ergebnisId) {

    axios.get(serverurl + "/schluessel_gruppen")
    .then(response => {
        store.dispatch(getGruppen(response.data));
        return response;
    });
}