import axios from 'axios';

export const CHANGE_DEVICE_TYPE = 'CHANGE_DEVICE_TYPE';

export function changeDeviceType(type) {
    let data;
    if(type === 'iPhone') {
        axios.get('/data/iPhone.json')
        .then((res) => { console.log('iPhone: ', res); });    
    } else if(type === 'iPad') {
        axios.get('/data/iPad.json')
        .then((res) => { console.log('iPhone: ', res); }); 
    }
    return { action: CHANGE_DEVICE_TYPE, payload: type }
}
