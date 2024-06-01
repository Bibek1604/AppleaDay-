import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Accessories from "./categories/Accessories";
import Earbuds from './categories/Earbuds';
import NewAndroid from "./categories/NewAndroid";
import Home from "./homepage";

import Electronics from "./categories/Electronics"; // Correct case
import Laptop from "./categories/Laptop";
import NewIphone from "./categories/NewIphone";
import UsedAndroid from "./categories/UsedAndroid";
import UsedIphone from "./categories/UsedIphone";
import About from "./components/About";
import Cart from './components/Cart';
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Login from './components/Login';
import ProductDetail from "./components/ProductDetail";
import Signup from './components/Signup';

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<TodaysFront />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/earbuds" element={<Earbuds />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/laptops" element={<Laptop />} />
          <Route path="/new-iphone" element={<NewIphone />} />
          <Route path="/new-android" element={<NewAndroid />} />
          <Route path="/used-iphone" element={<UsedIphone />} />
          <Route path="/used-android" element={<UsedAndroid />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetail" element={<ProductDetail />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
