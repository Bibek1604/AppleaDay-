import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { fetchProducts } from '../slice/bestsaleSlice';

const Bestsellingshop = () => {
  const dispatch = useDispatch();
  const { bestsale, status, error } = useSelector(state => state.bestsale);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts    ());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div><section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto animate-pulse">
        <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

        <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>
        </div>
    </div>
</section>...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="flex flex-wrap justify-center">
        {bestsale.map((product) => (
          <div key={product.id} className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
            <Link to={`/productdetail/${product.id}`}>
              <img className="h-60 rounded-t-lg object-cover" src={`http://localhost:8000${product.pic}`} alt={product.title} />
            </Link>
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-red-600 text-center text-sm text-white">{product.discount_percentage}% OFF</span>
            <div className="mt-4 px-5 pb-5">
              <Link to={`/productdetail/${product.id}`}>
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">{product.title}</h5>
              </Link>
              <span className="text-3xl font-bold text-slate-900">Rs.{product.final_rate}</span>
              <div className="flex items-center justify-between">
                <p>
                  <span className="text-sm text-slate-900 line-through">Rs.{product.initial_rate}</span>
                </p>
                <Link to={`/bestsellingshopdetails/${product.id}`} className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
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
}

export default Bestsellingshop;
