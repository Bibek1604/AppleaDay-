import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarousels } from '../slice/firstcrauselsSlice';

const FirstCarousel = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.crausels.items);
  const status = useSelector((state) => state.crausels.status);
  const error = useSelector((state) => state.crausels.error);

  useEffect(() => {   
    if (status === 'idle') {
      dispatch(fetchCarousels());
    }
  }, [status, dispatch]);

  return (
    <div className="p-8 bg-white">
      {/* Banner Section */}
      <div className="relative mb-12">
        <img
          src="section to insert images"
          alt="Enhance Your Music Experience"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h3 className="text-green-400 text-lg mb-2">Subtitle Here</h3>
          <h2 className="text-white text-3xl font-bold mb-4">Enhance Your Shopping Experience</h2>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Shop Now!</button>
        </div>
      </div>

      {/* Products Section */}
      <div className="mb-8">
        <div className="h-6 w-1 bg-red-600 inline-block mr-2"></div>
        <span className="text-lg font-bold">Here To Serve</span>
      </div>

      {/* Display Carousel Items */}
      <h3 className="text-3xl font-bold mb-8">Explore Our Shops</h3>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && Array.isArray(items) && (
        <div className="grid grid-cols-3 gap-4">
          {items.map((carousel) => (
            <div key={carousel.id} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{carousel.Title}</h3>
              <p className="text-gray-600">{carousel.Description}</p>
              <img src={`http://localhost:8000${carousel.Picture}`} alt={carousel.Title} className="mt-4 w-full h-40 object-cover rounded-lg" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FirstCarousel;
