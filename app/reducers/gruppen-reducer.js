
import * as types from '../actions/action-types';

const initialState = {
  gruppen: []  
};

const gruppenReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_GRUPPEN:
            return Object.assign({}, state, {gruppenState: action.gruppen});
  }

  return state;
}

export default gruppenReducer;