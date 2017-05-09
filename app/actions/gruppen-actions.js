

import * as types from './action-types';


export function getGruppen(gruppen) {
    return {
        type: types.GET_GRUPPEN,
        gruppen
    };
}