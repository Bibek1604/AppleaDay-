import { useState } from 'react';

const categories = [
  { name: 'Phones', icon: '📱' }, 
  { name: 'Computers', icon: '💻' },
  { name: 'SmartWatch', icon: '⌚' }, 
  { name: 'Camera', icon: '📷', active: true },
  { name: 'HeadPhones', icon: '🎧' },
  { name: 'Gaming', icon: '🎮' },
];

const Category = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveCategory(index);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Upcoming Sections</h2>

      </div>
      <div className="flex justify-center space-x-4">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className={`flex flex-col items-center p-4 border rounded-md cursor-pointer ${
              index === activeCategory ? 'bg-red-500 text-white' : 'hover:bg-gray-100'
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
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
