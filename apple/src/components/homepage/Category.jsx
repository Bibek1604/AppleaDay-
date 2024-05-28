import React from 'react';

const categories = [
  { name: 'Phones', icon: '📱' }, 
  { name: 'Computers', icon: '💻' },
  { name: 'SmartWatch', icon: '⌚' }, 
  { name: 'Camera', icon: '📷', active: true },
  { name: 'HeadPhones', icon: '🎧' },
  { name: 'Gaming', icon: '🎮' },
];

const Category = () => {
  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Browse By Category</h2>
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">{'<'}</button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">{'>'}</button>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`flex flex-col items-center p-4 border rounded-md cursor-pointer ${
              category.active ? 'bg-red-500 text-white' : 'hover:bg-gray-100'
            }`}
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <span className="text-lg">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
