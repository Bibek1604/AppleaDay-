import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';  

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from URL parameters
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/products/${id}`); // Assuming your backend API endpoint for fetching product details is /api/products/:id
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Show loading indicator while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  

  return (
    <>
    <div>
    <NavBar />
    <div className="flex flex-col lg:flex-row bg-white shadow-md p-6">
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-sm mx-auto"
        />
        <div className="flex justify-center mt-4">
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
        </div>
      </div>
      <div className="flex-1 lg:pl-10">
        <h1 className="text-3xl font-bold mb-2 text-red-500">{product.title}</h1>
        <div className="flex items-center mb-2">

          <span className=" text-bold text-green-500">Product stock:{product.stock}</span>
        </div>
        <p className="text-gray-600 mb-4">
        {product.description}
        </p>
        <div className="flex items-center mb-4">
          <div className="flex items-center border border-gray-300 mr-4">
            <button className="px-3 py-1">-</button>
            <input
              type="text"
              value="1"
              className="w-12 text-center border-l border-r border-gray-300"
            />
            <button className="px-3 py-1">+</button>
          </div>
          <div className="text-3xl font-bold text-gray-900">
          {product.final_rate}
            <span className="block text-sm text-gray-500">+12% VAT Added</span>
          </div>
        </div>
        <Link to='/cart' className="bg-blue-500 text-white py-2 px-4 w-full mb-4">Add to Cart</Link>
        <div className="mb-4"> 
          <h2 className="mt-4 text-xl font-semibold mb-2">Product Details</h2>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Color:</strong> {product.color}</p>
          <p><strong>Storage:</strong> {product.storage}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Select Size</h3>
          <button className="border border-gray-300 py-1 px-3 mr-2">Small</button>
          <button className="border border-gray-300 py-1 px-3 mr-2">Medium</button>
          <button className="border border-gray-300 py-1 px-3">Large</button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    </>
  );
};

export default ProductDetail;



////test