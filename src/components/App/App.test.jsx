import { render, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

global.structuredClone = jest.fn(val => {
  return JSON.parse(JSON.stringify(val));
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(
      {
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
        {
            "id": 3,
            "title": "Kitchen Sieve",
            "description": "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
            "category": "kitchen-accessories",
            "price": 7.99,
            "discountPercentage": 9.23,
            "rating": 2.96,
            "stock": 33,
            "tags": [
                "kitchen tools",
                "strainers"
            ],
            "sku": "4U0L9HB6",
            "weight": 5,
            "dimensions": {
                "width": 22.94,
                "height": 11.91,
                "depth": 20.47
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships in 1-2 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Awesome product!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Charlotte Davis",
                    "reviewerEmail": "charlotte.davis@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Leah Hughes",
                    "reviewerEmail": "leah.hughes@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Great value for money!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Daniel Taylor",
                    "reviewerEmail": "daniel.taylor@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.622Z",
                "updatedAt": "2024-05-23T08:56:21.622Z",
                "barcode": "4674610806136",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/thumbnail.png"
        },
        ],
        "total": 194,
        "skip": 30,
        "limit": 10
    }
    ),
  })
);

global.alert = jest.fn(val => console.log(val));

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test('renders product list title', async () => {
  const { getByText } = render(<App />);
  const productTitle = getByText(/Product List/i);
  // console.log(`linkElement`,linkElement);
  await waitFor(() => {
    expect(productTitle).toBeInTheDocument();
  });
  
});
