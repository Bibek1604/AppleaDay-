// Flashsaleshop.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlashSales } from '../slice/FlashsaleSlice';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Flashsaleshop = () => {
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

  return (
    <div>
      <NavBar />
      <div className="flex flex-wrap justify-center">
        {flashSales.map((product) => (
          <div key={product.id} className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
            <Link to={`/productdetail/${product.id}`}>
              <img className="h-60 rounded-t-lg object-cover" src={`http://localhost:8000${product.pic}`}    alt={product.title} />
            </Link>
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-red-600 text-center text-sm text-white">
              {product.discount_percentage.toFixed(2)}% OFF
            </span>
            <div className="mt-4 px-5 pb-5">
              <Link to={`/productdetail/${product.id}`}>
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">{product.title}</h5>
              </Link>
              <span className="text-3xl font-bold text-slate-900">${product.final_rate}</span>
              <div className="flex items-center justify-between">
                <p>
                  <span className="text-sm text-slate-900 line-through">${product.initial_rate}</span>
                </p>
                <Link to={`/flashSaleDetails/${product.id}`} className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Flashsaleshop;
