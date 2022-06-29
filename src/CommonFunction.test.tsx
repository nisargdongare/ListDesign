import { CacheData, getCacheData, GetCurrency, GetStringSplit } from "./CommonFunctions";


describe('CurrencyFinder', () => {

    it('CheckData', () => {
        let result = GetCurrency('INR');
        expect(result).toBe('₹');
    })

    it('CheckEmpty', () => {
        let result = GetCurrency('');
        expect(result).toBe('');
    })
})

describe('StringSplitter',()=>{
    it('StringCheck',()=>{
        let result = GetStringSplit('abc','',1);
        expect(result).toBe('b')
    })

    it('Empty',()=>{
        let result = GetStringSplit();
        expect(result).toBe('')
    })
    it('Empty',()=>{
        let result = GetStringSplit('abc-xyz','-',1);
        expect(result).toBe('xyz')
    })
})

describe('CacheData',()=>{
    it('write',async()=>{
        let result = await CacheData('test','Testing storage');
        expect(result).toBe(true);
    })
})

describe('getCacheData',()=>{
    it('read',async()=>{
        let result = await getCacheData('test');
        expect(result).toBe('Testing storage');
    })
})
