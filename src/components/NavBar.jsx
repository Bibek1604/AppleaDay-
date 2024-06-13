import TopBar from './TopBar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function NavBar() {

  const cartItems = useSelector((store)=>store.cart.cartItems)
  return (
    <div>
      <TopBar />
    <div className="bg-white shadow-md flex flex-col h-48 2xl:{'min':'1536px'} sm:{'min': '64">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center ">
        <div className="flex items-center space-x-8">
          <  img src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/375908393_274997832132626_4910430666814311441_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VPXzG9NsbsUQ7kNvgEXEiLK&_nc_ht=scontent.fktm21-1.fna&oh=00_AYAopJfzSkFt5nsvuGY62L-mHIPRVByYEywag2JcprJz1w&oe=66701F26" 
          alt="logo" 
          className="w-12 h-12" />
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-rose-600">Home</Link>
            <Link to="/contact" className="text-gray-700 hover:text-rose-600">Contact</Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-600">About</Link>
            <Link to="/signup" className="text-gray-700 hover:text-rose-600">Sign Up</Link>
          </nav>
        </div>
        <div className="flex items-center">
  <div className="relative">
    <input 
      type="text" 
      placeholder="What are you looking for?" 
      className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
    <FontAwesomeIcon 
      icon={faSearch} 
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
    />
  </div>
      
  
      

    </div>
    <Link to="/cart" className="flex items-center justify-center text-gray-800 hover:text-red-600">
    <FontAwesomeIcon icon={faCartShopping} className="text-2xl mr-2" />
    <span className="text-red-600 font-bold">{cartItems.length}</span>
  </Link>

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
