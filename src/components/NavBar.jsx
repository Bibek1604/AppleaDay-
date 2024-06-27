import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../slice/loginSlice';
import logo from '../assets/logo.jpg';

function NavBar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.login.status === 'succeeded');
  const dispatch = useDispatch();
  
  // State to manage mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState('');



  const handleLogout = () => {
    dispatch(logout());
    // You may want to redirect to the login page or any other desired location after logout
    // Example: history.push('/login');
  };

  return (
    <div className="bg-white shadow-md static">
      <div className="container mx-auto py-4 px-4 md:flex md:justify-between md:items-center">
        {/* Logo and Navigation Links */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-20 h-auto mr-2" src={logo} alt="logo" />
            AppleDay
          </Link>

          {/* Search Bar */}
 

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-rose-600 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-rose-600">Home</Link>
            <Link to="/contact" className="text-gray-700 hover:text-rose-600">Contact</Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-600">About</Link>
            <Link to="/notification" className="text-gray-700 hover:text-rose-600">Notification</Link>

            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-gray-700 hover:text-rose-600">Logout</button>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-rose-600">Login</Link>
            )}
          </nav>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-rose-600">Home</Link>
          <Link to="/contact" className="text-gray-700 hover:text-rose-600">Contact</Link>
          <Link to="/about" className="text-gray-700 hover:text-rose-600">About</Link>
          <Link to="/notification" className="text-gray-700 hover:text-rose-600">Notification</Link>

          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-gray-700 hover:text-rose-600">Logout</button>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-rose-600">Login</Link>
          )}
        </nav>
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 sm:w-full md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto">
        <form className="flex items-center space-x-2">
  <input 
    type="text" 
    placeholder="What are you looking for?" 
    className="flex-grow p-2 border border-gray-300 rounded-md text-xs sm:text-sm"
    style={{ maxWidth: '250px' }}
  />
  <button 
    type="button" 
    className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"

  >
    Search
  </button>
</form>

          <div className="flex space-x-2">
            <button className="p-2">
              <i className="fas fa-heart text-gray-700"></i>
            </button>
            <Link to="/cart" className="flex items-center justify-center text-gray-800 hover:text-red-600">
              <FontAwesomeIcon icon={faCartShopping} className="text-2xl mr-2" />
              <span className="text-red-600 font-bold">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Links */}
      <div className="container mx-auto py-2 px-4 flex overflow-x-auto whitespace-nowrap space-x-4 text-sm text-gray-700 md:block-hidden">
        <Link to="/new-iphone" className="hover:text-rose-600">New Iphone</Link>
        <Link to="/cover" className="hover:text-rose-600">Cover</Link>
        <Link to="/electronics" className="hover:text-rose-600">Electronics</Link>
        <Link to="/new-android" className="hover:text-rose-600">New Android</Link>
        <Link to="/used-iphone" className="hover:text-rose-600">Used Iphone</Link>
        <Link to="/used-android" className="hover:text-rose-600">Used Android</Link>
        <Link to="/laptops" className="hover:text-rose-600">Laptop</Link>
        <Link to="/earbuds" className="hover:text-rose-600">Earbuds</Link>
        <Link to="/accessories" className="hover:text-rose-600">Accessories</Link>
      </div>

      {/* Flexible Space */}
      <div className="flex-grow"></div>
    </div>
  );
}

export default NavBar;
