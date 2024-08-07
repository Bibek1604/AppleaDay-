import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../slice/productsSlice'; 
import { addItem } from '../slice/cartSlice';
import NavBar from './NavBar';
import Footer from './Footer';

const ProductDetail = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === Number(id))
  );

  useEffect(() => {
    if (!product) {
      dispatch(fetchProducts());
    }
  }, [dispatch, product]);

  const handleAddItem = () => {
    dispatch(addItem({ ...product, quantity }));
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  // Show loading indicator if the product is being fetched
  if (!product) {
    return <div><section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto animate-pulse">
        <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

        <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>
        </div>
    </div>
</section></div>;
  }

  return (
    <>
      <div>
        <NavBar />
        <div className="flex flex-col lg:flex-row bg-white shadow-md p-6">
          <div className="flex-1">
            <img
              src={product.pic}
              alt={product.title}
              className="w-full max-w-sm mx-auto"
            />
            {/* <div className="flex justify-center mt-4">
              <img
                src={product.thumbnail1}
                alt="Thumbnail 1"
                className="w-16 h-16 mx-1 cursor-pointer"
              />
              <img
                src={product.thumbnail2}
                alt="Thumbnail 2"
                className="w-16 h-16 mx-1 cursor-pointer"
              />
              <img
                src={product.thumbnail3}
                alt="Thumbnail 3"
                className="w-16 h-16 mx-1 cursor-pointer"
              />
            </div> */}
          </div>
          <div className="flex-1 lg:pl-10">
            <h1 className="text-3xl font-bold mb-2 text-red-500">{product.title}</h1>
            <div className="flex items-center mb-2">
              <span className="text-bold text-green-500">Product stock: {product.stock}</span>
            </div>
            <p className="text-gray-600 mb-4">
              {product.description}
            </p>
            <div className="flex items-center mb-4">

              <div className="text-3xl font-bold text-gray-900">
                {product.final_rate}
                <span className="block text-sm text-gray-500">+12% VAT Added</span>
              </div>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 w-full mb-4" onClick={handleAddItem}>
              Add to Cart
            </button>
            <div className="mb-4">
              <h2 className="mt-4 text-xl font-semibold mb-2">Product Details</h2>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Color:</strong> {product.color}</p>
              <p><strong>Storage:</strong> {product.storage}</p>
            </div>
            {/* <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Select Size</h3>
              <button className="border border-gray-300 py-1 px-3 mr-2">Small</button>
              <button className="border border-gray-300 py-1 px-3 mr-2">Medium</button>
              <button className="border border-gray-300 py-1 px-3">Large</button>
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
