import phones from '../assets/data/iPhone';
import ipad from '../assets/data/iPad';

export const fetchPhones = async (type) => {
    return new Promise((resolve) => {
        type === 'iPad' ? resolve(ipad) : resolve(phones);
    })
}