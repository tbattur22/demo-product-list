import {getProductsApi} from './';

test('getProductsApi() returns correct api endpoint', async () => {  
    const products = Array(97);
    const limit = 30;
    const prodApi = getProductsApi(products, limit);
    expect(prodApi).toBe("https://dummyjson.com/products?skip=97&limit=30");
});
