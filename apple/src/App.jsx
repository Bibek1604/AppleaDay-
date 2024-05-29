import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import TopBar from './components/TopBar';
import BestSelling from './components/homepage/BestSelling';
import Category from './components/homepage/Category';
import FirstCrausel from './components/homepage/FirstCrausel';
import FlashSales from './components/homepage/FlashSales';
import OurProducts from './components/homepage/OurProducts';
import Service from './components/homepage/Service';
function App() {
  return (
    <Router>
      <TopBar />
      <NavBar />
      <FirstCrausel />
      
      <FlashSales />
      <Category />
      <BestSelling />
      <OurProducts />
      <Service />
      <Footer />
      
      
      <Routes>
        {/* <Route path="/" element={<TodaysFront />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer />} />
        {/* <Route path="/" element={<TopCrausels />} /> */}
        

      </Routes>

      
    </Router>
    
  );
}

export default App;
