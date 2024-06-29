import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecommendations } from '../slice/recommendationSlice';
import Footer from '../components/Footer';
import Navbars from '../components/Navbars';

function Recommendationshop() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.recommendations);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRecommendations());
    }
  }, [status, dispatch]);

  return (<div>
          <Navbars />

    <div className="m-10">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div className="flex flex-wrap -mx-4">
          {items.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
                <a href="#">
                  <img className="h-60 rounded-t-lg object-cover w-full" src={item.pic} alt="product image" />
                </a>
                <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-slate-900">{item.title}</h5>
                  </a>
     
                  <div className="flex items-center justify-between">
                    <p>
                      <span className="text-1xl font-bold text-red-600">Rs{item.final_rate}</span>
                      <span className="text-sm text-gray-600 line-through">Rs{item.initial_rate}</span>
                    </p>
                    <a
                      href="#"
                      className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer />

    </div>

  );
}

export default Recommendationshop;
