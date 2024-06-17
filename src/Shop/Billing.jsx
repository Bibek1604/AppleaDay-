import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { clearCart } from '../slice/cartSlice';
import { fetchOrder } from '../slice/orderSlice';

function Billing() {
  const dispatch = useDispatch();
  const order = useSelector((store) => store.order.order);
  const orderStatus = useSelector((store) => store.order.status);
  const orderError = useSelector((store) => store.order.error);
  const cartItems = useSelector((store) => store.cart.cartItems);

  const [payWithCash, setPayWithCash] = useState(false);
  const [payWithDelivery, setPayWithDelivery] = useState(false);

  useEffect(() => {
    dispatch(fetchOrder());
  }, [dispatch]);

  const handleCashChange = () => {
    setPayWithCash(!payWithCash);
    if (!payWithCash) {
      setPayWithDelivery(false);
    }
  };

  const handleDeliveryChange = () => {
    setPayWithDelivery(!payWithDelivery);
    if (!payWithDelivery) {
      setPayWithCash(false);
    }
  };

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.final_rate) || 0;
      const itemQuantity = parseInt(item.quantity) || 0;
      return total + itemPrice * itemQuantity;
    }, 0);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      firstName: order.firstName || '',
      lastName: order.lastName || '',
      email: order.email || '',
      phone: order.phone || '',
      addressLine: order.addressLine || '',
      city: order.city || '',
      state: order.state || '',
      zipCode: order.zipCode || '',
      paymentMethod: payWithCash ? 'Cash' : payWithDelivery ? 'Delivery' : '',
      products: cartItems,
      totalCost: calculateTotalCost().toFixed(2),
    };

    try {
      // Replace with your actual backend API endpoint for order submission
      const response = await fetch('http://127.0.0.1:8000/order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit order');
      }

      // Clear cart upon successful order submission
      dispatch(clearCart());
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Failed to submit order:', error.message);
      // Handle error (e.g., show error message to user)
      alert('Failed to place order. Please try again later.');
    }
  };

  return (
    <>
      <div>
        <NavBar />
        <div className="font-sans bg-gray-100">
          <div className="flex max-sm:flex-col gap-4 h-full">
            <div className="bg-gray-500 sm:h-screen sm:sticky sm:top-0 lg:min-w-[350px] sm:min-w-[300px]">
              <div className="relative h-full">
                <div className="p-4 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                  <div className="space-y-4">
                    <div className="border-t mt-8">
                      {cartItems.map((product) => (
                        <div key={product.id} className="flex font-semibold justify-between py-6 text-sm uppercase text-white">
                          <span>{product.title} (ID: {product.id})</span>
                          <span>Rs {parseFloat(product.final_rate).toFixed(2)}</span>
                        </div>
                      ))}
                      <div className="flex font-semibold justify-between py-6 text-sm uppercase text-white">
                        <span>Total Cost of Products</span>
                        <span>Rs {calculateTotalCost().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:absolute md:left-0 md:bottom-0 bg-blue-300 w-full p-4">
                  <h4 className="flex flex-wrap gap-4 text-base text-white">
                    Total <span className="ml-auto">Rs {calculateTotalCost().toFixed(2)}</span>
                  </h4>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto w-full h-max rounded-md p-4 sticky top-0">
              <h2 className="text-xl font-bold text-gray-800">Complete your order</h2>
              <form className="mt-8" onSubmit={handleSubmit}>
                {/* Personal Details Form */}
                <div>
                  <h3 className="text-base font-semibold text-gray-800 mb-4">Personal Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                        value={order.firstName || ''}
                        readOnly
                      />
                    </div>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                        value={order.lastName || ''}
                        readOnly
                      />
                    </div>
                    <div className="relative flex items-center">
                      <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                        value={order.email || ''}
                        readOnly
                      />
                    </div>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="Phone No."
                        className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                        value={order.phone || ''}
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address Form */}
                <div className="mt-8">
                  <h3 className="text-base font-semibold text-gray-800 mb-4">Shipping Address</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Address Line"
                      className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                      value={order.addressLine || ''}
                      readOnly
                    />
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                      value={order.city || ''}
                      readOnly
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                      value={order.state || ''}
                      readOnly
                    />
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                      value={order.zipCode || ''}
                      readOnly
                    />
                  </div>
                </div>

                {/* Payment Details */}
                <div className="mt-8">
                  <h3 className="text-base font-semibold text-gray-800 mb-4">Pay With</h3>
                  <div className="mb-4">
                    <label className="inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-red-600 h-5 w-5" 
                        checked={payWithCash} 
                        onChange={handleCashChange} 
                      />
                      <span className="ml-2 text-red-600">Pay with Cash</span>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-red-600 h-5 w-5" 
                        checked={payWithDelivery} 
                        onChange={handleDeliveryChange} 
                      />
                      <span className="ml-2 text-red-600">Pay with Delivery</span>
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 max-md:flex-col mt-8">
                  <button
                    type="button"
                    className="rounded-md px-4 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-gray-800 max-md:order-1"
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </button>
                  <button
                    type="submit"
                    className="rounded-md px-4 py-3 w-full text-sm font-semibold bg-red-800 text-white hover:bg-gray-900"
                  >
                    Complete Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Billing;
