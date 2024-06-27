  import React from 'react';
  import { useNavigate } from 'react-router-dom';

  const ProductCard = ({ product, category }) => {
    const navigate = useNavigate();

    const getImageSrc = (pic) => {
      return pic.startsWith('http') ? pic : `http://localhost:8000${pic}`;
    };

    const handleViewDetails = (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      switch (category) {
        case 'recommendations':
          navigate(`/recommendationdetails/${product.id}`);
          break;
        case 'flashSales':
          navigate(`/flashSaleDetails/${product.id}`);
          break;
        case 'products':
          navigate(`/productdetail/${product.id}`);
          break;
        case 'bestSelling':
          navigate(`/bestsellingshopdetails/${product.id}`);
          break;
        default:
          break;
      }
    };

    return (
      <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
        <button onClick={handleViewDetails} className="w-full">
          <img className="h-60 rounded-t-lg object-cover w-full" src={getImageSrc(product.pic)} alt={product.title} />
        </button>
        {product.onSale && (
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
        )}
        <div className="mt-4 px-5 pb-5">
          <button onClick={handleViewDetails} className="text-left w-full">
            <h5 className="text-xl font-semibold tracking-tight text-red-600">{product.title}</h5>
          </button>
          <div className="flex items-center justify-between">
            <p>
              <span className="text-sm font-bold text-slate-900">Rs{product.final_rate}</span>
              {product.oldPrice && <span className="text-sm text-slate-900 line-through text-gray-200">Rs{product.initial_rate}</span>}
            </p>
            <button
              onClick={handleViewDetails}
              className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              View Product
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default ProductCard;
