import { getProductsApi } from "./api";
import { startStopSearchTextLength } from "./model/search";

const getProducts = async (products, limit) => {
    let result = {data: null, msg: null};
    try {
        const res = await fetch(getProductsApi(products, limit));
        if (res.ok) {
            result.data = await res.json();
        } else {
            result.msg = `Failed to get products. Response status: ${res.status} and status text: ${res.statusText}`;
        }
    } catch (error) {
        console.log(`Product list endpoint failed.`,error);
        result.msg = "Product endpoint is not accessable! Error:" + error.message;
    }
    return result;
}

export default {getProducts, startStopSearchTextLength};