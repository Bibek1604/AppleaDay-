import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';

import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import TopBar from './components/TopBar';
function App() {
  return (
    <Router>
      <TopBar />
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<TodaysFront />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer />} />
        {/* <Route path="/" element={<TopCrausels />} /> */}
        

      </Routes>
      <Footer />
      

      
    </Router>
    
  );
}

export default App;
