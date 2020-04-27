import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const newArray = state.results.filter((result) => result.id !== action.resultElid);
  return updateObject(state, {results: newArray});
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
    case actionTypes.DELETE_RESULT:
        // const id = 2;

        // const newArray = [...state.results] // YES but warning with object inside
        // newArray.splice(id, 1); // OK
        // state.results.splice(id, 1); // NO
        return deleteResult(state, action);
        
    default:
        return state;
  }

};

export default reducer;
