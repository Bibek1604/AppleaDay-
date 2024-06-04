import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
        <div>
          <h2 className="text-xl font-bold">Exclusive</h2>
          <p className="mt-4">Subscribe</p>
          <p className="mt-2">Get 10% off your first order</p>
          <div className="mt-4 flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 w-full border border-gray-300 rounded-l-md bg-gray-700 text-white"
            />
            <button className="p-2 bg-rose-600 rounded-r-md">
              <i className="fas fa-arrow-right text-white"></i>
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Support</h2>
          <p className="mt-4">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="mt-2">exclusive@gmail.com</p>
          <p className="mt-2">+88015-88888-9999</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Account</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-rose-600">My Account</a></li>
            <li><a href="#" className="hover:text-rose-600">Login / Register</a></li>
            <li><a href="#" className="hover:text-rose-600">Cart</a></li>
            <li><a href="#" className="hover:text-rose-600">Wishlist</a></li>
            <li><a href="#" className="hover:text-rose-600">Shop</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">Quick Link</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-rose-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-rose-600">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-rose-600">FAQ</a></li>
            <li><a href="#" className="hover:text-rose-600">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">Download App</h2>
          <p className="mt-4">Save $3 with App New User Only</p>
          <div className="mt-4 flex space-x-4">
            <img src="google-play-badge.png" alt="Google Play" className="h-10"/>
            <img src="app-store-badge.png" alt="App Store" className="h-10"/>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-rose-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-rose-600"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-rose-600"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-rose-600"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-4">
        <p className="text-center text-gray-500">&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
