import { getProductsApi } from "./api";
import { startStopSearchTextLength } from "./model/search";

const getProducts = async (products, limit) => {
    const productsRes = await fetch(getProductsApi(products, limit));
    const jsonData = await productsRes.json();
    return jsonData;
}

export default {getProducts, startStopSearchTextLength};