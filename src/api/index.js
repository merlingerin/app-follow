import phones from '../assets/data/iPhone';
import ipad from '../assets/data/iPad';
import collections from '../assets/data/collections';

export const fetchPhones = async (type) => {
    return new Promise((resolve) => {
        type === 'iPad' ? resolve(ipad) : resolve(phones);
    })
}

export const fetchCollections = async (colectionName) => {
    return new Promise((resolve) => {
        resolve(collections);
    })
}