import React from 'react';

function NewArrival() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <span className="text-rose-600 font-bold">Featured</span>
          <h2 className="text-3xl font-bold mt-2">New Arrival</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="relative h-full">
              <img src="/images/ps5.jpg" alt="PlayStation 5" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">PlayStation 5</h3>
                <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
                <a href="#" className="mt-2 inline-block text-sm bg-rose-600 px-3 py-1 rounded-lg">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative h-full">
              <img src="/images/womens-collection.jpg" alt="Women's Collections" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Women's Collections</h3>
                <p className="text-sm">Featured woman collections that give you another vibe.</p>
                <a href="#" className="mt-2 inline-block text-sm bg-rose-600 px-3 py-1 rounded-lg">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative h-full">
              <img src="/images/speakers.jpg" alt="Speakers" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Speakers</h3>
                <p className="text-sm">Amazon wireless speakers</p>
                <a href="#" className="mt-2 inline-block text-sm bg-rose-600 px-3 py-1 rounded-lg">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative h-full">
              <img src="/images/perfume.jpg" alt="Perfume" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Perfume</h3>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                <a href="#" className="mt-2 inline-block text-sm bg-rose-600 px-3 py-1 rounded-lg">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrival;
