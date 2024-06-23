import "@material-tailwind/react";
import { FaHeadset, FaRegMoneyBillAlt, FaShippingFast } from "react-icons/fa";

const Service = () => {
  return (
    
    <div className="flex justify-center items-center space-x-8 py-10 bg-white">
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <div className="p-4 bg-gray-200 rounded-full">
            <FaShippingFast className="text-3xl text-black" />
          </div>
        </div>
        <h2 className="text-lg font-bold">FREE AND FAST DELIVERY</h2>
        <p className="text-gray-600">Free delivery for all orders over $140</p>
      </div>
      
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <div className="p-4 bg-gray-200 rounded-full">
            <FaHeadset className="text-3xl text-black" />
          </div>
        </div>
        <h2 className="text-lg font-bold">24/7 CUSTOMER SERVICE</h2>
        <p className="text-gray-600">Friendly 24/7 customer support</p>
      </div>
      
      {/* Money Back Guarantee */}
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <div className="p-4 bg-gray-200 rounded-full">
            <FaRegMoneyBillAlt className="text-3xl text-black" />
          </div>
        </div>
        <h2 className="text-lg font-bold">MONEY BACK GUARANTEE</h2>
        <p className="text-gray-600">We return money within 30 days</p>
      </div>
    </div>
  );
}

export default Service;
