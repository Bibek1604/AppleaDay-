import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchAllData } from '../slice/combinedSlice';
import ProductCard from '../search/ProductCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Search = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.combined);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch data when query changes
    if (queryParams.get('q') !== query) {
      dispatch(fetchAllData());
    }
  }, [query, dispatch, queryParams]);

  useEffect(() => {
    // Filter products based on search query
    const lowercaseQuery = query.toLowerCase().trim();
    if (lowercaseQuery === '') {
      setFilteredProducts(products); // Show all products if query is empty
    } else {
      const filtered = products.map(product => ({ ...product, matchScore: calculateMatchScore(product, lowercaseQuery) }))
                              .filter(product => product.matchScore > 0)
                              .sort((a, b) => b.matchScore - a.matchScore);
      setFilteredProducts(filtered);
    }
  }, [query, products]);

  const calculateMatchScore = (product, query) => {
    const title = product.title ? product.title.toLowerCase() : '';
    const description = product.description ? product.description.toLowerCase() : '';
    const category = product.category ? product.category.toLowerCase() : '';
    const tagsIncludeQuery = product.tags ? product.tags.some(tag => tag.toLowerCase().includes(query)) : false;
    
    let matchScore = 0;
    if (title.includes(query)) matchScore += 4;
    if (description.includes(query)) matchScore += 3;
    if (category.includes(query)) matchScore += 2;
    if (tagsIncludeQuery) matchScore += 1;
    
    return matchScore;
  };

  const handleSearch = () => {
    // Update URL with encoded query and fetch data
    const encodedQuery = encodeURIComponent(query.trim());
    window.history.pushState({}, '', `/search?q=${encodedQuery}`);
    dispatch(fetchAllData());
  };

  const handleInputChange = (e) => {
    // Update query state on input change
    setQuery(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center my-4">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded-md mr-2"
          placeholder="Search products..."
          value={query}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No products found.</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Search;
