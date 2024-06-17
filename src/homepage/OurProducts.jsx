import React from 'react';

const OurProduct = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-left mb-8">
        <span className="text-red-500 font-bold">Featured</span>
        <h1 className="text-3xl font-bold">Our Shop</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative bg-black h-72">
          <img src="https://t4.ftcdn.net/jpg/04/17/80/01/360_F_417800157_T0LAZqY9fNsNtfv01zJvXJi452MqnFZ6.jpg" alt="Mobile repair" className="w-full h-full object-cover opacity-80" />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-lg font-bold">Reparing Mobile Phone </h2>
            <p>Comprehensive repairs for all smartphone brands including screen, battery, and software issues.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative bg-black h-36">
            <img src="https://cdn0-production-images-kly.akamaized.net/f_GNAfG5XLBywhkvhWOHD4DmjMQ=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4239901/original/028466500_1669386239-shutterstock_1863024973.jpg" alt="Second hand mobile" className="w-10 h-1 min-w-100 min-h-50 object-cover opacity-80" />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-base font-bold">Certified Pre-owned Mobile
              </h2>
              <p className="text-sm">High-quality certified pre-owned iPhones and Android devices. Fully tested, refurbished, and guaranteed for performance and reliability."






</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative bg-black h-36">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJikKTTKTBppkz_8FEJaAxyo-Zy2BDBmxRZXPwLCvSY8j2okJln8qtFmuOYQw-fE3R5-8&usqp=CAU" alt="Perfume" className="w-full h-full object-cover opacity-80" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-base font-bold">Sell Second Hand Mobiles</h2>
                <p className="text-sm"> We buy your pre-owned mobiles , Easy Transactions!!</p>
              </div>
            </div>
            <div className="relative bg-black h-36">
              <img src="https://img.freepik.com/premium-vector/rating-stars-trusted-seller-badge-logo-stamp-label-circular-round-design-template_542325-44.jpg" alt="Speakers" className="w-full h-full object-cover opacity-80" />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-base font-bold">Trusted Brand</h2>
                <p className="text-sm">Trusted by thousands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
