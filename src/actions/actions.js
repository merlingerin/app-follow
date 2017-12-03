import { 
    FETCH_APPS_START,
    FETCH_APPS_SUCCESS,
    FETCH_APPS_FAILURE,
    CHANGE_DEVICE_TYPE,
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE
 } from './actionsTypes';
 import { fetchPhones as fetchPhonesApi } from '../api/index';
 import { fetchCollections as fetchCollectionsApi } from '../api/index';

//===============FETCH APPS FROM API==================// 
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

//===============FETCH COLLECTIONS FROM API==================//
export const fetchCollections = (collectionName) =>  async dispatch => {
    dispatch({type: FETCH_COLLECTIONS_START});

    try {
        let data = await fetchCollectionsApi(collectionName);
        dispatch({
            type: FETCH_COLLECTIONS_SUCCESS,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: FETCH_COLLECTIONS_FAILURE,
            payload: err
        })
    }
}

//===============CHANGE DEVICE TYPE==================//
export const changeType = (type) => dispatch => {
    dispatch({type: CHANGE_DEVICE_TYPE, payload: type})
}