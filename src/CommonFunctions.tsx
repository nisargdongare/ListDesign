import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
// import { AsyncStorage } from 'react-native';

export const GetCurrency = (currency: string) => {  // give symbol of currency 
    switch (currency) {
        case 'GBP': return '£';
        case 'USD': return '$';
        case 'INR': return '₹';
        default: return '';
    }
}

export const GetStringSplit = (data: string, index: number) => { // splits to convert  any string to array
    if (!data) { return ''; };
    let array = data.split(' ');
    return array[index];
}

export const CacheData = async (key: string, value: any) => { // writes  the given data to AsyncStorage
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    catch (e) {
        // window.alert(e);
        return false;
    }
}

export const getCacheData = async (key: any) => { // reads  the given data to AsyncStorage
    return AsyncStorage.getItem(key)
        .then((req: any) => JSON.parse(req))
        .catch(error => console.log('error!'));
}




export const initialDataState = {
    name: '',
    amount: 0,
    currency: '',
    time: '',
    created_at: '',
    status: '',
    icon: '',
    category: '',
    carbon_footprint: 0,
    fees: 0,
    visible: false,
    type: '',
    brand_partner: false
}

export type initialDataStatusProp = {
    name: string,
    amount: number,
    currency: string,
    time: string,
    date: string,
    status: string,
    icon: string,
    category: string,
    carbon_footprint: number,
    fees: number,
    visible: boolean,
    type: string,
    brand_partner: boolean,
    setShowDetailView: any
}