import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { placeOrder } from '../slice/orderSlice';
import { clearCart } from '../slice/cartSlice'; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const initialFormData = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  address_line: '',
  city: '',
  state: '',
  zip_code: '',
  payment_method: 'cash',
  products: [],
  total_cost: 0
};

const Billing = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const discount = useSelector((store) => store.coupons.discount);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const products = cartItems.map((item) => ({
      id: item.id,
      title: item.title,
      pic: item.pic, 
      photo: item.photo,
      quantity: item.quantity,
      final_rate: item.final_rate
    }));

    const totalCostBeforeDiscount = calculateTotalCost();
    const totalCostAfterDiscount = totalCostBeforeDiscount - (discount || 0);

    setFormData((prevFormData) => ({
      ...prevFormData,
      products,
      total_cost: totalCostAfterDiscount
    }));
  }, [cartItems, discount]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(placeOrder(formData))
      .then((action) => {
        if (placeOrder.fulfilled.match(action)) {
          dispatch(clearCart()); 
          setFormData(initialFormData);
        }
      });
  };

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.final_rate) || 0;
      const itemQuantity = parseInt(item.quantity) || 0;
      return total + itemPrice * itemQuantity;
    }, 0);
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="/" className="text-2xl font-bold text-blue-800">AppleDay</a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={`http://localhost:8000${item.pic}`} alt={item.title} />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.title}</span>
                  <span className="float-right text-gray-400">{item.size}</span>
                  <p className="text-lg font-bold">Rs.{item.final_rate}</p>
                  <button
                    onClick={() => handleItemClick(item.title, item.pic)} 
                    className="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-4 rounded-lg shadow-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form onSubmit={handleSubmit} className="mt-5 grid gap-6">
            <div className="relative">
              <input
                type="radio"
                id="cash_on_delivery"
                name="payment_method"
                value="cash"
                checked={formData.payment_method === 'cash'}
                onChange={handleChange}
                className="hidden peer"
              />
              <label
                htmlFor="cash_on_delivery"
                className="peer-checked:border-2 peer-checked:border-indigo-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              >
                <img className="w-14 object-contain" src="https://rgslogistics.co/media/cod-services-1.png" alt="Cash On Delivery" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Cash On Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">Pay cash when you receive your order</p>
                </div>
              </label>
            </div>
            <div className="relative mt-4">
              <input
                type="radio"
                id="pay_online"
                name="payment_method"
                value="delivery"
                checked={formData.payment_method === 'delivery'}
                onChange={handleChange}
                className="hidden peer"
              />
              <label
                htmlFor="pay_online"
                className="peer-checked:border-2 peer-checked:border-indigo-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              >
                <img className="w-14 object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKzFucoObOEGJnoC9hs1TYcSTjMHtNhDDD2WqceitjuZjjTk2tnlp7Z7DNEp56F-ftR8&usqp=CAU" alt="Pay Online" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Pay with Khalti</span>
                  <p className="text-slate-500 text-sm leading-6">Pay online using Khalti</p>
                </div>
              </label>
            </div>
            {/* Additional shipping methods can be added similarly */}
          </form>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal</p>
              <p className="font-semibold text-gray-900">Rs.{calculateTotalCost().toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Delivery</p>
              <p className="font-semibold text-gray-900">Free</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Discount</p>
              <p className="font-semibold text-gray-900">Rs.{discount.toFixed(2)}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">Rs.{formData.total_cost.toFixed(2)}</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-6 shadow-md max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Enter your first name"
                className="mt-1 block w-full h-10 px-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Enter your last name"
                className="mt-1 block w-full h-10 px-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="mt-1 block w-full h-10 px-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                placeholder="Enter your phone number"
                className="mt-1 block w-full h-10 px-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address_line" className="block text-sm font-medium text-gray-700">Address Line</label>
              <input
                type="text"
                id="address_line"
                name="address_line"
                placeholder="Enter your address"
                className="mt-1 block w-full h-10 px-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={formData.address_line}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                className="mt-1 block w-full h-10 px-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter your state"
                className="mt-1 block w-full h-10 px-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="zip_code" className="block text-sm font-medium text-gray-700">ZIP Code</label>
              <input
                type="text"
                id="zip_code"
                name="zip_code"
                placeholder="Enter your ZIP code"
                className="mt-1 block w-full h-10 px-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={formData.zip_code}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input type="hidden" name="payment_method" value={formData.payment_method} />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Billing;