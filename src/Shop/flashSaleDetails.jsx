import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchFlashSales } from '../slice/FlashsaleSlice';
import { addItem } from '../slice/cartSlice';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const FlashSaleDetails = () => {
  const { productId } = useParams();  // Get the productId from route parameters
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { flashSales, status, error } = useSelector((state) => state.flashSales);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFlashSales());
    }
  }, [status, dispatch]);

  const product = flashSales.find((item) => item.id === parseInt(productId));
  


  const handleAddItem = () => {                          /////////add to cart disppatch
    dispatch(addItem({ ...product, quantity }));
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row bg-white shadow-md p-6">
        <div className="flex-1">
          <img
            src={product.photo}
            alt={product.title}
            className="w-full max-w-sm mx-auto"
          />
        </div>
        <div className="flex-1 lg:pl-10">
          <h1 className="text-3xl font-bold mb-2 text-red-500">{product.title}</h1>
          <div className="flex items-center mb-2">
            <span className="text-bold text-green-500">Product stock: {product.stock}</span>
          </div>
          <p className="text-gray-600 mb-4">
            {product.description}
          </p>
          <div className="flex items-center mb-4">
            <div className="text-3xl font-bold text-gray-900">
              {product.final_rate}
              <span className="block text-sm text-gray-500">+12% VAT Added</span>
            </div>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 w-full mb-4" onClick={handleAddItem}>
            Add to Cart
          </button>
          <div className="mb-4"> 
            <h2 className="mt-4 text-xl font-semibold mb-2">Product Details</h2>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Color:</strong> {product.color}</p>
            <p><strong>Storage:</strong> {product.storage}</p>
            <p><strong>Warranty:</strong> {product.warranty}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Select Size</h3>
            <button className="border border-gray-300 py-1 px-3 mr-2">Small</button>
            <button className="border border-gray-300 py-1 px-3 mr-2">Medium</button>
            <button className="border border-gray-300 py-1 px-3">Large</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlashSaleDetails;
