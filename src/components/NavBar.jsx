import { Link } from 'react-router-dom';
import TopBar from './TopBar';


function NavBar() {
  return (
    <div>
      <TopBar />
    <div className="bg-white shadow-md flex flex-col h-48">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold">Exclusive</h1>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-rose-600">Home</Link>
            <Link to="/contact" className="text-gray-700 hover:text-rose-600">Contact</Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-600">About</Link>
            <Link to="/signup" className="text-gray-700 hover:text-rose-600">Sign Up</Link>
          </nav>
        </div>+
        <div className="flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="What are you looking for?" 
            className="p-3 border border-gray-300 rounded-md"
          />
          <button className="p-2">
            <i className="fas fa-search text-gray-700"></i>
          </button>
          <button className="p-2">
            <i className="fas fa-heart text-gray-700 space-x-15"></i>
          </button>
          <button className="p-2">
            <i className="fas fa-shopping-cart text-gray-700"></i>
          </button>
        </div>
      </div>
      <div className="container mx-auto py-2 px-4 flex overflow-x-auto whitespace-nowrap space-x-4 text-sm text-gray-700">
        <Link to="/new-iphone" className="hover:text-rose-600">New Iphone</Link>
        <Link to="/cover" className="hover:text-rose-600">Cover</Link>
        <Link to="/electronics" className="hover:text-rose-600">Electronics</Link>
        <Link to="/new-android" className="hover:text-rose-600">New Android</Link>
        <Link to="/used-iphone" className="hover:text-rose-600">Used Iphone</Link>
        <Link to="/used-android" className="hover:text-rose-600">Used Android </Link>
        <Link to="/laptops" className="hover:text-rose-600">Laptop</Link>
        <Link to="/earbuds" className="hover:text-rose-600">Earbuds</Link>
        <Link to="/accessories" className="hover:text-rose-600">Accessories</Link>

      </div>
      <div className="flex-grow"></div> {/* This element will take up the remaining space */}
    </div>
    </div>
  );
}

export default NavBar;
