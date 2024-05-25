import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import TodaysFront from './components/TodaysFront';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodaysFront />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
