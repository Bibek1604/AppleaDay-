import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
      <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white mix-blend ">
            <img className="w-50 h-20 mr-2" src={logo} alt="logo" />
          </Link>
        <div>
          <h2 className="text-xl font-bold">AppleDay Store!</h2>
          <p className="mt-2">Get 10% off your first order</p>
          <div className="mt-4 flex">


          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Contact</h2>
          <p className="mt-4">
New Baneshwor, Kathmandu

</p>
          <p className="mt-2 ">shopwithappleday@gmail.com</p>
          <p className="mt-2">+9804682770,9851350535</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Account</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="/flashsaleshop" className="hover:text-rose-600">Flash Sale</a></li>
            <li><a href="/" className="hover:text-rose-600">Home</a></li>
            <li><a href="/cart" className="hover:text-rose-600">Cart</a></li>
            <li><a href="" className="hover:text-rose-600">Shop</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">Quick Link</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-rose-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-rose-600">Terms Of Use</a></li>
            <li><a href="/about" className="hover:text-rose-600">FAQ</a></li>
            <li><a href="/contact" className="hover:text-rose-600">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">Shop Now</h2>
          <p className="mt-4">Save about 3% with WebApp New User Only</p>

          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-rose-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-rose-600"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-rose-600"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-rose-600"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-4">
        <p className="text-center text-gray-500">&copy; Copyright AppleDay 2024. All right reserved || Developed By Bibek Pandey</p>
      </div>

    </footer>
  );
}

export default Footer;
