import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { updateQuantity, removeFromCart, updateCart } from '../slice/cartSlice';
import { validateCoupon } from '../slice/couponsSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const discount = useSelector((store) => store.coupons.discount);
  const couponStatus = useSelector((store) => store.coupons.status);
  const couponError = useSelector((store) => store.coupons.error);
  const dispatch = useDispatch();

  const [promoCode, setPromoCode] = useState('');

  const updateCartFromStorage = (cartData) => {
    dispatch(updateCart(cartData));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      updateCartFromStorage(JSON.parse(storedCart));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.final_rate) || 0;
      const itemQuantity = parseInt(item.quantity) || 0;
      return total + itemPrice * itemQuantity;
    }, 0);
  };

  const handleApplyPromo = () => {
    dispatch(validateCoupon(promoCode));
  };

  const totalCostBeforeDiscount = calculateTotalCost();
  const totalCostAfterDiscount = totalCostBeforeDiscount - (discount || 0);

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-10">
        <div className="sm:flex shadow-md my-10">
          <div className="w-full sm:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
            </div>
            {cartItems.map((product) => (
              <div key={product.id} className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
                <div className="md:w-4/12 2xl:w-1/4 w-full">
                  <img src={product.pic}   alt={product.title} className="h-full object-center object-cover md:block hidden" />
                  <img src={product.pic}  alt={product.title} className="md:hidden w-full h-full object-center object-cover" />
                </div>
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{product.code}</p>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-base font-black leading-none text-gray-800">{product.title}</p>
                    <select
                      aria-label="Select quantity"
                      className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                      value={product.quantity}
                      onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
                    >
                      {[...Array(10).keys()].map((_, index) => (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-xs leading-3 text-gray-600 pt-2">Storage: {product.storage}</p>
                  <p className="text-xs leading-3 text-gray-600 py-4">Color: {product.color}</p>
                  <p className="w-96 text-xs leading-3 text-gray-600">Warranty: {product.warranty}</p>
                  <div className="flex items-center justify-between pt-5">
                    <div className="flex items-center">
                      <p
                        className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        Remove
                      </p>
                    </div>
                    <p className="text font-black leading-none text-gray-800">
                      Rs{(parseFloat(product.final_rate) * parseInt(product.quantity)).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                <path
                  d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
                />
              </svg>
              Continue Shopping
            </Link>
          </div>
          <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
              <span className="font-semibold text-sm">Rs{totalCostBeforeDiscount.toFixed(2)}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Free Delivery All Over Nepal</option>
              </select>
            </div>
            <div className="py-10">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
              <input
                type="text"
                id="promo"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            {couponError && <p className="text-red-500 text-sm">{couponError}</p>}
            <button
              className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
              onClick={handleApplyPromo}
              disabled={couponStatus === 'loading'}
            >
              {couponStatus === 'loading' ? 'Applying...' : 'Apply'}
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total Cost of Products</span>
                <span>Rs {totalCostBeforeDiscount.toFixed(2)}</span>
              </div>
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Discount of Coupon Code</span>
                <span>Rs {(discount || 0).toFixed(2)}</span>
              </div>
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total Cost of Products After Discount</span>
                <span>Rs {totalCostAfterDiscount.toFixed(2)}</span>
              </div>
              <Link to="/billing" className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
