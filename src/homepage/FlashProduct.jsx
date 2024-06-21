import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlashSales } from '../slice/FlashsaleSlice';
import { Link } from 'react-router-dom';
import { addItem } from '../slice/cartSlice';

const FlashProduct = () => {
  const dispatch = useDispatch();
  const flashSales = useSelector((state) => state.flashSales.flashSales);
  const flashSalesStatus = useSelector((state) => state.flashSales.status);
  const error = useSelector((state) => state.flashSales.error);

  useEffect(() => {
    if (flashSalesStatus === 'idle') {
      dispatch(fetchFlashSales());
    }
  }, [flashSalesStatus, dispatch]);

  if (flashSalesStatus === 'loading') {
    return <div>Loading...</div>;
  } else if (flashSalesStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  const handleAddItem = (product) => {
    const quantity = 1; // Default quantity to add to cart
    dispatch(addItem({ ...product, quantity }));
  };  



  return (
    
    
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {flashSales.slice(0, 4).map((flashSale) => (
          <div key={flashSale.id} className="border rounded-lg p-3 shadow-lg w-72 mx-auto">
            <div className="relative">
              <img src={`http://localhost:8000${flashSale.pic}`}   alt={flashSale.title} className="w-50 h-40 object-cover mb-4 rounded-lg" />
              <span className="absolute top-2 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-r">
                -{flashSale.discount_percent}%
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{flashSale.title}</h3>
            <div className="flex items-center mb-2">
              <span className="text-red-500 ml-1 font-bold">Rs.{flashSale.initial_rate}</span>
              <span className="text-gray-500 line-through ml-1">Rs.{flashSale.final_rate}</span>
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600" onClick={() => handleAddItem(flashSale)}>
                Add to Cart
              </button>
              <Link to={`/flashSaleDetails/${flashSale.id}`} className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/flashsaleshop">
          <button className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600">View All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default FlashProduct;
