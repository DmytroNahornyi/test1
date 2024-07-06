import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchQuery,
  setCategoryFilter,
} from '../redux/actions/filterActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchQuery, categoryFilter } = useSelector(state => state.filters);

  const handleSearchChange = e => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleCategoryChange = e => {
    dispatch(setCategoryFilter(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search products..."
      />
      <select value={categoryFilter} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
};

export default SearchBar;
