import { FaEye, FaHeart } from 'react-icons/fa';

const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Breed Dry Dog Food',
      price: 100,
      image: 'path/to/dog-food.jpg',
      rating: 4.5,
      reviews: 35
    },
    {
      id: 2,
      name: 'CANON EOS DSLR Camera',
      price: 360,
      image: 'path/to/canon-camera.jpg',
      rating: 4.5,
      reviews: 95
    },
    {
      id: 3,
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      image: 'path/to/asus-laptop.jpg',
      rating: 4.5,
      reviews: 325
    },
    {
      id: 4,
      name: 'Curology Product Set',
      price: 500,
      image: 'path/to/curology-product.jpg',
      rating: 4,
      reviews: 145
    },
  ];

  return (
    <div className="p-8 bg-white">
      {/* Banner Section */}
      <div className="relative mb-12">
        <img src="path/to/banner-image.jpg" alt="Enhance Your Music Experience" className="w-full h-64 object-cover rounded-lg" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h3 className="text-green-400 text-lg mb-2">Categories</h3>
          <h2 className="text-white text-3xl font-bold mb-4">Enhance Your Music Experience</h2>
          <div className="flex space-x-2 mb-4">
            <div className="bg-white text-black rounded-full px-4 py-2 bg-red-600">23 Hours</div>
            <div className="bg-white text-black rounded-full px-4 py-2 bg-red-600">05 Days</div>
            <div className="bg-white text-black rounded-full px-4 py-2 bg-red-600">59 Minutes</div>
            <div className="bg-white text-black rounded-full px-4 py-2 bg-red-600">35 Seconds</div>
          </div>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Buy Now!</button>
        </div>
      </div>

      {/* Products Section */}
      <div className="mb-8">
        <div className="h-6 w-1 bg-red-600 inline-block mr-2"></div>
        <span className="text-lg font-bold">Our Products</span>
      </div>
      <h3 className="text-3xl font-bold mb-8">Explore Our Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg text-center">
            <img src={product.image} alt={product.name} className="mb-4 w-full h-40 object-cover" />
            <h4 className="text-lg font-bold mb-2">{product.name}</h4>
            <div className="mb-2">
              <span className="text-red-600 text-xl font-bold">${product.price}</span>
            </div>
            <div className="flex justify-center items-center mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={`text-yellow-500 ${index < Math.floor(product.rating) ? 'fa fa-star' : 'fa fa-star-o'}`}></span>
              ))}
              <span className="ml-2">({product.reviews})</span>
            </div>
            <div className="flex justify-center space-x-4">
              <FaHeart className="text-gray-500 cursor-pointer" />
              <FaEye className="text-gray-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
