import * as actionTypes from './actionsTypes';

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().counter.counter;
            console.log(oldCounter)
            dispatch(saveResult(result));
        }, 2000);
    }
};
export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElid: id
    };
};