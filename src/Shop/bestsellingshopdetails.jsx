import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../slice/cartSlice'; // Adjust the import path
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { fetchProducts } from '../slice/bestsaleSlice'; // Import fetchProducts thunk

const Bestsellingshopdetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { bestsale, status, error } = useSelector((state) => state.bestsale);
  const product = bestsale.find((product) => product.id === Number(id));

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <div>
        <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

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
            src={`http://localhost:8000${product.pic}`}
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
          {/* <div className="mb-4">
            <h3 className="text-lg font-medium mb-2">Select Size</h3>
            <button className="border border-gray-300 py-1 px-3 mr-2">Small</button>
            <button className="border border-gray-300 py-1 px-3 mr-2">Medium</button>
            <button className="border border-gray-300 py-1 px-3">Large</button>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bestsellingshopdetails;
