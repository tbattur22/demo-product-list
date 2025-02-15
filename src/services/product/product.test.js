import Product from './product';

describe('getProducts() works correctly', () => {
    // jest.mock('./api/index.js', () => ({
    //     getProductsApi: jest.fn(() => 'https://invalid_url')
    // }));
    const mockData = {
        "products": [
          {
            "id": 1,
            "title": "Hand Blender",
            "description": "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
            "category": "kitchen-accessories",
            "price": 34.99,
            "discountPercentage": 6.44,
            "rating": 3.71,
            "stock": 8,
            "tags": [
                "kitchen appliances",
                "blenders"
            ],
            "sku": "JZNXDL37",
            "weight": 4,
            "dimensions": {
                "width": 13.3,
                "height": 6.21,
                "depth": 16.77
            },
            "warrantyInformation": "1 year warranty",
            "shippingInformation": "Ships in 1 week",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Highly recommended!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Chloe Morales",
                    "reviewerEmail": "chloe.morales@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Eleanor Tyler",
                    "reviewerEmail": "eleanor.tyler@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Highly impressed!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Stella Morris",
                    "reviewerEmail": "stella.morris@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 7,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.622Z",
                "updatedAt": "2024-05-23T08:56:21.622Z",
                "barcode": "0910668863747",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/thumbnail.png"
        },
        {
            "id": 2,
            "title": "Ice Cube Tray",
            "description": "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
            "category": "kitchen-accessories",
            "price": 5.99,
            "discountPercentage": 0.95,
            "rating": 3.27,
            "stock": 81,
            "tags": [
                "kitchen tools",
                "ice cube trays"
            ],
            "sku": "K0UE7U34",
            "weight": 8,
            "dimensions": {
                "width": 27.19,
                "height": 20.42,
                "depth": 17.45
            },
            "warrantyInformation": "No warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Excellent quality!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Mia Miller",
                    "reviewerEmail": "mia.miller@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very happy with my purchase!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Emma Miller",
                    "reviewerEmail": "emma.miller@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Highly impressed!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Isabella Anderson",
                    "reviewerEmail": "isabella.anderson@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 11,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.622Z",
                "updatedAt": "2024-05-23T08:56:21.622Z",
                "barcode": "7685066283284",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/thumbnail.png"
        },
        ],
        "total": 194,
        "skip": 30,
        "limit": 10
    };

    test('endpoint not available', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
              ok: false,
              status: 404,
              statusText: "Not found.",
              json: () => Promise.reject(
                new Error(`Something went wrong.`)
              ),
            })
          );
    
        const res = await Product.getProducts(Array(5), 3);
        // console.log(`endpoint not available`,res);
        expect(res).toEqual({data: null, msg: "Failed to get products. Response status: 404 and status text: Not found."})
    });
    
    test('endpoint returns valid data', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
              ok: true,
              status: 200,
              statusText: "OK",
              json: () => Promise.resolve(
                mockData
              ),
            })
          );
    
        const res = await Product.getProducts(Array(5), 3);
        // console.log(`endpoint not available`,res);
        expect(res).toEqual({data: mockData, msg: null})
    });
})
