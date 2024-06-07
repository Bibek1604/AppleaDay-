import React from 'react';

const FirstCarousel = () => {
  return (
    <div className="p-8 bg-white">
      {/* Banner Section */}
      <div className="relative mb-12">
        <img src="section to insert images" alt="Enhance Your Music Experience" className="w-full h-64 object-cover rounded-lg" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h3 className="text-green-400 text-lg mb-2"></h3>
          <h2 className="text-white text-3xl font-bold mb-4">Enhance Your Shhopping Experience</h2>
 
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Shop Now!</button>
        </div>
      </div>

      {/* Products Section */}
      <div className="mb-8">
        <div className="h-6 w-1 bg-red-600 inline-block mr-2"></div>
        <span className="text-lg font-bold">Here To Serve</span>
      </div>
      <h3 className="text-3xl font-bold mb-8">Explore Our Shops</h3>
  
    </div>
  );
};

export default FirstCarousel;


// Based on these guidelines, a good size for a full-width banner image would be approximately 1920 pixels wide by 1  080
//  pixels high (16:9 aspect ratio) with a resolution of 72 PPI. This size should provide a good balance 
// between image quality and file size, ensuring that the image looks crisp and loads quickly on most devices.