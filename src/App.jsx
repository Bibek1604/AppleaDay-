import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from "./homepage";
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

        </Routes>
      </Router>
    </>
  );
}

export default App;
