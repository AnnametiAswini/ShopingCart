// Cart.js
import React from 'react';
import ProductCard from './ProductCart';
import './Cart.css'

const Cart = () => {
    const items = [
        {
            id: '1',
            name: 'Sample Product 1',
            price: 50.00,
            imageUrl: 'https://m.media-amazon.com/images/I/41tD6MQ-MML._SY741_.jpg',
            isSale: true,
            rating: 4.5,
            showAddToCart: false,
            showViewOptions: true,
        },
        {
            id: '2',
            name: 'Sample Product 2',
            price: 800.00,
            imageUrl: 'https://m.media-amazon.com/images/I/61+vyX-bRdL._SY879_.jpg',
            isSale: false,
            rating: 4.5,
            showAddToCart: true,
            showViewOptions: false,
        },
        {
            id: '3',
            name: 'Sample Product 3',
            price: 120.00,
            imageUrl: 'https://m.media-amazon.com/images/I/41tccgk5BnL.jpg',
            isSale: true,
            rating: 4.5,
            showAddToCart: false,
            showViewOptions: true,
        },
        {
            id: '4',
            name: 'Sample Product 4',
            price: 110.00,
            imageUrl: 'https://m.media-amazon.com/images/I/51GugoGykqL._SY741_.jpg',
            isSale: false,
            rating: 4.5,
            showAddToCart: true,
            showViewOptions: false,
        },
        {
            id: '5',
            name: 'Sample Product 5',
            price: 130.00,
            imageUrl: 'https://m.media-amazon.com/images/I/81A9B7M9uqL._SY741_.jpg',
            isSale: true,
            rating: 4.5,
            showAddToCart: false,
            showViewOptions: true,
        },
        {
            id: '6',
            name: 'Sample Product 6',
            price: 40.00,
            imageUrl: 'https://m.media-amazon.com/images/I/61+vyX-bRdL._SY879_.jpg',
            isSale: false,
            rating: 4.5,
            showAddToCart: true,
            showViewOptions: false,
        },
        {
            id: '7',
            name: 'Sample Product 7',
            price: 760.00,
            imageUrl: 'https://m.media-amazon.com/images/I/51GugoGykqL._SY741_.jpg',
            isSale: true,
            rating: 4.5,
            showAddToCart: false,
            showViewOptions: true,
        },
        {
            id: '8',
            name: 'Sample Product 8',
            price: 60.00,
            imageUrl: 'https://m.media-amazon.com/images/I/81yrL6LCOxL._SY879_.jpg',
            isSale: false,
            rating: 4.5,
            showAddToCart: true,
            showViewOptions: false,
        },
        {
            id: '9',
            name: 'Sample Product 9',
            price: 30.00,
            imageUrl: 'https://m.media-amazon.com/images/I/81A9B7M9uqL._SY741_.jpg',
            isSale: true,
            rating: 4.5,
            showAddToCart: false,
            showViewOptions: true,
        },
        {
            id: '10',
            name: 'Sample Product 10',
            price: 90.00,
            imageUrl: 'https://m.media-amazon.com/images/I/71brQjAjY2L._SY879_.jpg',
            isSale: false,
            rating: 4.5,
            showAddToCart: true,
            showViewOptions: false,
        },
        {
            id: '11',
            name: 'Sample Product 11',
            price: 100.00,
            imageUrl: 'https://m.media-amazon.com/images/I/61+vyX-bRdL._SY879_.jpg',
            isSale: true,
            rating: 4.5,
            showAddToCart: false,
            showViewOptions: true,
        },
        {
            id: '12',
            name: 'Sample Product 12',
            price:120.00,
            imageUrl: 'https://m.media-amazon.com/images/I/41tccgk5BnL.jpg',
            isSale: true,
            rating: 4.5,
            showAddToCart: true,
            showViewOptions: false,
        },
        {
            id: '13',
            name: 'Sample Product 13',
            price: 150.00,
            imageUrl: 'https://m.media-amazon.com/images/I/41Dw8cbgAXL._SY741_.jpg',
            isSale: true,
            rating: 4.5,
            showAddToCart: false,
            showViewOptions: true,
        },
        {
            id: '14',
            name: 'Sample Product 14',
            price: 80.00,
            imageUrl: 'https://m.media-amazon.com/images/I/61+vyX-bRdL._SY879_.jpg',
            isSale: true,
            rating: 4.5,
            showAddToCart: false,
            showViewOptions: true,
        },
        {
            id: '15',
            name: 'Sample Product 15',
            price: 90.00,
            imageUrl: 'https://m.media-amazon.com/images/I/41tccgk5BnL.jpg',
            isSale: true,
            rating: 4.5,
            showAddToCart: false,
            showViewOptions: true,
        },
        // Add more items with different properties as needed
    ];

    return (
        <div className='Cart'>
            {items.map((item) => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    );
}

export default Cart;
