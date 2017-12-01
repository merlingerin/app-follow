import { 
    FETCH_APPS_START,
    FETCH_APPS_SUCCESS,
    FETCH_APPS_FAILURE,
    CHANGE_DEVICE_TYPE
 } from './actionsTypes';
 import { fetchPhones as fetchPhonesApi } from '../api/index';

export const fetchApps = (type) =>  async dispatch => {
    dispatch({type: FETCH_APPS_START});

    try {
        let data = await fetchPhonesApi(type);
        dispatch({
            type: FETCH_APPS_SUCCESS,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: FETCH_APPS_FAILURE,
            payload: err
        })
    }
}

export const changeType = (type) => dispatch => {
    dispatch({type: CHANGE_DEVICE_TYPE, payload: type})
}