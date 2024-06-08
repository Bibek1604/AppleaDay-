import React from 'react';

const products = [
  {
    name: 'HAVIT HV-G92 Gamepad',
    price: 120,
    originalPrice: 160,
    discount: 40,
    rating: 4.5,
    reviews: 88,
    image: 'path/to/gamepad-image.jpg',
  },
  {
    name: 'IPS LCD Gaming Monitor',
    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 4.5,
    reviews: 99,
    image: 'path/to/monitor-image.jpg',
  },
  {
    name: 'S-Series Comfort Chair',
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
    image: 'path/to/chair-image.jpg',
  },
    {
    name: 'S-Series Comfort Chair',
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
    image: 'path/to/chair-image.jpg',
  },
];

const FlashProduct = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-3 shadow-lg w-72 mx-auto">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg"/>
              <span className="absolute top-2 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-r">
                -{product.discount}%
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center mb-2">
              <span className="text-red-500 text-xl font-bold">${product.price}</span>
              <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 fill-current ${
                      i < product.rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.214 1.179-5.938 5.783 1.407 8.199L12 18.897l-7.351 3.865 1.407-8.199L.116 9.197l8.214-1.179L12 .587z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">({product.reviews})</span>
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">Add to Cart</button>
              <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300">Details</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 mt-20">
        <button className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600">View All Products</button>
      </div>
    </div>
  );
};

export default FlashProduct;
