import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../slice/cartSlice'; 
import { fetchProducts } from '../slice/bestsaleSlice';
const BestSelling = () => {
  const dispatch = useDispatch();
  const { bestsale, status, error } = useSelector(state => state.bestsale);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="p-8 bg-white">
      <div className="flex items-center mb-8">
        <div className="h-6 w-1 bg-red-600 mr-2"></div>
        <h2 className="text-2xl font-bold">This Month</h2>
      </div>
      <h3 className="text-3xl font-bold mb-8">Best Selling Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestsale.slice(0, 4).map((product) => (
          <div key={product.id} className="border p-4 rounded-lg text-center">
            <img src={`http://localhost:8000${product.pic}`} alt={product.title} className="mb-4 w-full h-40 object-cover" />
            <h4 className="text-lg font-bold mb-2">{product.title}</h4>
            <div className="mb-2">
              <span className="text-red-600 text-xl font-bold">Rs.{product.final_rate}</span>
              {product.initial_rate && (
                <span className="text-gray-500 line-through ml-2">Rs.{product.initial_rate}</span>
              )}
            </div>
            <div className="flex justify-center items-center mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={`text-yellow-500 ${index < product.rating ? 'fa fa-star' : 'fa fa-star-o'}`}></span>
              ))}
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <Link to={`/bestsellingshopdetails/${product.id}`} className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/all-bestselling-products">
          <button className="bg-red-600 text-white py-2 px-6 rounded-lg">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default BestSelling;
