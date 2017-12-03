
let initialState = {
    deviceType: 'iPhone'
};

export default ( state = initialState, action ) => {
    switch(action.type) {
        case 'FETCH_APPS_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        case 'FETCH_COLLECTIONS_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        case('CHANGE_DEVICE_TYPE'):
            return {
                ...state,
                deviceType: action.payload
            }
        default:
            return state;
    }
}
