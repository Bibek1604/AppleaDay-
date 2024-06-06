

const ProductCard = ({ discount, image, title, originalPrice, discountedPrice, rating, reviews }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg relative">
      <span className={`absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br-lg`}>-{discount}%</span>
      <img className="w-full h-40 object-contain" src={image} alt={title} />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-500 line-through">${originalPrice}</p>
      <p className="text-red-500 text-xl">${discountedPrice}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <span className="text-yellow-400 text-sm">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
          <span className="ml-2 text-gray-600">({reviews})</span>
        </div>
        <div className="space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Details</button>
        </div>
      </div>
    </div>
  );
};

const FlashSales = () => {
  const products = [
    {
      discount: 40,
      image: 'https://via.placeholder.com/150',
      title: 'HAVIT HV-G92 Gamepad',
      originalPrice: 160,
      discountedPrice: 120,
      rating: 5,
      reviews: 88,
    },
    {
      discount: 30,
      image: 'https://via.placeholder.com/150',
      title: 'IPS LCD Gaming Monitor',
      originalPrice: 400,
      discountedPrice: 370,
      rating: 5,
      reviews: 99,
    },
    {
      discount: 25,
      image: 'https://via.placeholder.com/150',
      title: 'S-Series Comfort Chair',
      originalPrice: 500,
      discountedPrice: 375,
      rating: 4,
      reviews: 99,
    },
  ];

  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex items-start justify-center w-full gap-12 mt-9 place-content-evenly">
        {/* Left Side - Flash Sales */}
        <div className="text-red-600 text-2xl font-semibold">
          Flash Sales
        </div>
        
        {/* Middle - Countdown Timer */}
        <div className="flex items-center gap-4">
          {/* Countdown Timer Blocks */}
          <div className="timer flex flex-col items-center">
            <div className="countdown-element font-manrope font-semibold text-2xl text-indigo-600">
              {/* Your countdown days component */}
            </div>
            <p className="text-sm font-normal text-gray-900">days</p>
          </div>
          <h3 className="font-manrope font-semibold text-2xl text-gray-900">:15</h3>
          <div className="timer flex flex-col items-center">
            <div className="countdown-element font-manrope font-semibold text-2xl text-indigo-600">
              {/* Your countdown hours component */}
            </div>
            <p className="text-sm font-normal text-gray-900">hours</p>
          </div>
          <h3 className="font-manrope font-semibold text-2xl text-gray-900">:20</h3>
          <div className="timer flex flex-col items-center">
            <div className="countdown-element font-manrope font-semibold text-2xl text-indigo-600">
              {/* Your countdown minutes component */}
            </div>
            <p className="text-sm font-normal text-gray-900">minutes</p>
          </div>
          <h3 className="font-manrope font-semibold text-2xl text-gray-900">:25</h3>
          <div className="timer flex flex-col items-center">
            <div className="countdown-element font-manrope font-semibold text-2xl text-indigo-600">
              {/* Your countdown seconds component */}
            </div>
          </div>
        </div>

        {/* Right Side - < > */}
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">{'<'}</button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">{'>'}</button>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <button className="mt-8 bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">View All Products</button>

     </div>
  );
};

export default FlashSales;
