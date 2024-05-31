import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Accessories from "./categories/Accessories";
import Earbuds from "./categories/earbuds";
import Home from "./homepage";

import Electronics from "../categories/Electronics"; // Correct case
import Laptop from "../categories/Laptop";
import NewAndroid from "../categories/NewAndroid"; // Correct case
import NewIphone from "../categories/NewIphone";
import UsedAndroid from "../categories/UsedAndroid";
import UsedIphone from "../categories/UsedIphone";
import Contact from "../components/Contact";
import Footer from '../components/Footer';
import Login from '../components/Login';
import Signup from '../components/Signup';
import './App.css';

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/earbuds" element={<Earbuds />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/new-iphone" element={<NewIphone />} />
          <Route path="/new-android" element={<NewAndroid />} />
          <Route path="/used-iphone" element={<UsedIphone />} />
          <Route path="/used-android" element={<UsedAndroid />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
