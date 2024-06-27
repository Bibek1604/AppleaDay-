import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllData } from '../slice/combinedSlice';
import ProductCard from '../search/ProductCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const Search = () => {
  const dispatch = useDispatch();
  const { bestSelling, flashSales, products, recommendations, status, error } = useSelector((state) => state.combined);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllData());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bestSelling.map((product) => (
          <ProductCard key={product.id} product={product} category="bestSelling" />
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {flashSales.map((sale) => (
          <ProductCard key={sale.id} product={sale} category="flashSales" />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} category="products" />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((recommendation) => (
          <ProductCard key={recommendation.id} product={recommendation} category="recommendations" />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
