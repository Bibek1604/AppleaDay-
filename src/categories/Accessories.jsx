import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { fetchProducts } from '../slice/productsSlice';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Accessories = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === 'loading') {
    return <div>Loading...</div>;
  } else if (productStatus === 'failed') {
    return <div>Error: {error}</div>;
  }
  const filteredProducts = products.filter(product => product.category === 'New iphone');


  return (
    
    <div>
    <NavBar />
    <main className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {filteredProducts.map((product) => (
          <div key={product.id} className="relative max-w-xs mx-auto overflow-hidden rounded-lg bg-white shadow-md">
            <Link to={`/productdetail/${product.id}`}>
              <img className="h-60 w-full rounded-t-lg object-cover" src={product.photo} alt={product.title} />
            </Link>
            <span className="absolute top-0 left-0 w-28 transform translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
            <div className="mt-4 px-5 pb-5">
              <Link to={`/productdetail/${product.id}`}>
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">{product.title}</h5>
              </Link>
              <div className="mt-2.5 mb-5 flex items-center">
              <span className="text-sm text-red-600 line-through">${product.initial_rate}</span>


                {/* Add more star SVGs based on product.rating */}
              </div>
              <div className="flex items-center justify-between">
                <p>
                <span className="text-1xl font-bold text-red-500">RS.{product.final_rate}</span>
                </p>
                <Link to={`/productdetail/${product.id}`} 
                  className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="mr-2 h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                    />
                  </svg>
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
  );
}

export default Accessories;
