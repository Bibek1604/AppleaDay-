import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../slice/cartSlice'; // Adjust the import path
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Bestsellingshopdetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state =>
    state.bestsale.bestsale.find(product => product.id === parseInt(id))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddItem = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row bg-white shadow-md p-6">
        <div className="flex-1">
          <img
            src={product.pic}
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
              ${product.final_rate}
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

export default Bestsellingshopdetails;
