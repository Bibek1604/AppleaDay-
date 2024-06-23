// FirstCarousel.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarousels } from '../slice/firstcrauselsSlice';

function FirstCarousel() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.carousels);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchCarousels());
  }, [dispatch]);

  useEffect(() => {
    // Automatic slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-2xl mx-auto bg-black">
      <div id="indicators-carousel" className="relative w-full" data-carousel="static">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {status === 'loading' && <p>Loading...</p>}
          {status === 'failed' && <p>Error: {error}</p>}
          {status === 'succeeded' && items.length > 0 ? (
            <>
              {items.map((item, index) => (
                <div key={item.id} className={`absolute w-full ${index === currentIndex ? 'block' : 'hidden'}`}>
                  <img src={`http://localhost:8000${item.picture}`} className="block w-full" alt={item.title} />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>No carousel items found.</p>
          )}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
          {items.map((_, index) => (
            <button key={index} type="button" className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'}`} aria-current={index === currentIndex ? "true" : "false"} aria-label={`Slide ${index + 1}`} data-carousel-slide-to={index} onClick={() => goToSlide(index)}></button>
          ))}
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={() => setCurrentIndex((currentIndex - 1 + items.length) % items.length)}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={() => setCurrentIndex((currentIndex + 1) % items.length)}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default FirstCarousel;
