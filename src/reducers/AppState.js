
let InitialState = {
    deviceType: 'iPhone'
};

const AppState = ( state = InitialState, action ) => {
    switch(action.type) {
        case('CHANGE_DEVICE_TYPE'):
            return {
                ...InitialState,
                deviceType: action.payload
            }
        break;
        default:
            return state;
    }
}

export default AppState;