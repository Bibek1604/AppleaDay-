import { FaEye, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const BestSelling = () => {
  const products = [
    {
      id: 1,
      name: 'The north coat',
      price: 260,
      originalPrice: 360,
      image: 'path/to/north-coat.jpg',
      rating: 4.5,
      reviews: 65
    },
    {
      id: 2,
      name: 'Gucci duffle bag',
      price: 960,
      originalPrice: 1160,
      image: 'path/to/gucci-duffle-bag.jpg',
      rating: 4.5,
      reviews: 65
    },
    {
      id: 3,
      name: 'RGB liquid CPU Cooler',
      price: 160,
      originalPrice: 170,
      image: 'path/to/rgb-liquid-cpu-cooler.jpg',
      rating: 4.5,
      reviews: 65
    },
    {
      id: 4,
      name: 'Small BookShelf',
      price: 360,
      originalPrice: null,
      image: 'path/to/small-bookshelf.jpg',
      rating: 4.5,
      reviews: 65
    },
  ];

  return (
    <div className="p-8 bg-white">
      <div className="flex items-center mb-8">
        <div className="h-6 w-1 bg-red-600 mr-2"></div>
        <h2 className="text-2xl font-bold">This Month</h2>
      </div>
      <h3 className="text-3xl font-bold mb-8">Best Selling Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg text-center">
            <img src={product.photo} alt={product.name} className="mb-4 w-full h-40 object-cover" />
            <h4 className="text-lg font-bold mb-2">{product.name}</h4>
            <div className="mb-2">
              <span className="text-red-600 text-xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
              )}
            </div>
            <div className="flex justify-center items-center mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={`text-yellow-500 ${index < product.rating ? 'fa fa-star' : 'fa fa-star-o'}`}></span>
              ))}
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600" >
                Add to Cart
              </button>
             <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300">
                Details
                </button>
                </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="bg-red-600 text-white py-2 px-6 rounded-lg">View All</button>
      </div>
    </div>
  );
};

export default BestSelling;
