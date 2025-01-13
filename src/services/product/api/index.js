export function getProductsApi(products, limit) {
    return `https://dummyjson.com/products?skip=${products.length}&limit=${limit}`;
}