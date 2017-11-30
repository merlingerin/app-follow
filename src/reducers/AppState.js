
let initialState = {
    deviceType: 'iPhone'
};

export default ( state = initialState, action ) => {
    switch(action.type) {
        case('CHANGE_DEVICE_TYPE'):
            return {
                ...state,
                deviceType: action.payload
            }
        break;
        default:
            return state;
    }
}
