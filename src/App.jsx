import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Accessories, Earbuds, Electronics, Laptop,Notification ,NewIphone, UsedAndroid,Billing,UsedIphone,Search , About, Cart, Contact, Footer, Login, ProductDetail, Signup, Cover, Home, NewAndroid, Flashsaleshop,FlashSaleDetails , Bestsellingshop,Bestsellingshopdetails} from './index'; // Correct case 
import { Provider } from 'react-redux';

import store from './store/Store';
import Protected from './Shop/protectedRoute';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>


          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notification" element={<Notification />} />
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
          <Route path="/cover" element={<Cover />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path='/flashsaleshop' element={<Flashsaleshop />} />
          <Route path='/flashSaleDetails/:productId' element={<FlashSaleDetails />} />
          <Route path='/bestsellingshop' element={<Bestsellingshop />} />
          <Route path='/bestsellingshopdetails/:id' element={<Bestsellingshopdetails />} />
          <Route path='/billing' element={<Protected Component={Billing} />} />


          

         
 
          
          

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
