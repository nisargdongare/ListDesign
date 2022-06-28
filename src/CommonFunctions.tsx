

export const GetCurrency = (currency: string) => {
    switch (currency) {
        case 'GBP': return '£';
        case 'USD': return '$';
        case 'INR': return '₹';
        default: return '';
    }
}

export const GetDate = (data:string) =>{
    if(!data){return '';}; 
    let array = data.split(' ');
    return array[0];
}
export const GetTime = (data:string) =>{
    if(!data){return '';};
    let array = data.split(' ');
    return array[1];
}