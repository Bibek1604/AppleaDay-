// src/components/ProductDetail.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white shadow-md p-6">
      <div className="flex-1">
        <img
          src="shirt.png"
          alt="Men's Regular T-shirt"
          className="w-full max-w-sm mx-auto"
        />
        <div className="flex justify-center mt-4">
          <img
            src="shirt.png"
            alt="Thumbnail 1"
            className="w-16 h-16 mx-1 cursor-pointer"
          />
          <img
            src="shirt2.png"
            alt="Thumbnail 2"
            className="w-16 h-16 mx-1 cursor-pointer"
          />
          <img
            src="shirt3.png"
            alt="Thumbnail 3"
            className="w-16 h-16 mx-1 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex-1 lg:pl-10">
        <h1 className="text-3xl font-bold mb-2">Men's Regular T-shirt</h1>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="ml-2 text-gray-700">5 Rating</span>
          <span className="ml-4 text-green-500">In Stock</span>
        </div>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non erat quam. Vestibulum aliquam nibh dui, et aliquet nibh euismod quis.
        </p>
        <div className="flex items-center mb-4">
          <div className="flex items-center border border-gray-300 mr-4">
            <button className="px-3 py-1">-</button>
            <input
              type="text"
              value="1"
              className="w-12 text-center border-l border-r border-gray-300"
            />
            <button className="px-3 py-1">+</button>
          </div>
          <div className="text-3xl font-bold text-gray-900">
            $29.00
            <span className="block text-sm text-gray-500">+12% VAT Added</span>
          </div>
        </div>
        <Link to='/cart' className="bg-blue-500 text-white py-2 px-4 w-full mb-4">Add to Cart</Link>
        <div className="mb-4"> 
          <h2 className="text-xl font-semibold mb-2">Product Details</h2>
          <p><strong>Size:</strong> Small, Medium, Large</p>
          <p><strong>Color:</strong> White, Black, Gray</p>
          <p><strong>Brand:</strong> Shirt Flex</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Select Size</h3>
          <button className="border border-gray-300 py-1 px-3 mr-2">Small</button>
          <button className="border border-gray-300 py-1 px-3 mr-2">Medium</button>
          <button className="border border-gray-300 py-1 px-3">Large</button>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Select Color</h3>
          <button className="w-8 h-8 bg-gray-700 rounded-full mr-2"></button>
          <button className="w-8 h-8 bg-red-500 rounded-full mr-2"></button>
          <button className="w-8 h-8 bg-blue-500 rounded-full mr-2"></button>
          <button className="w-8 h-8 bg-green-500 rounded-full"></button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;



////test