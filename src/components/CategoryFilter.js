import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter } from '../actions/filterActions';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector(state => state.filters.category);

  const handleCategoryChange = e => {
    dispatch(setCategoryFilter(e.target.value));
  };

  return (
    <select value={currentCategory} onChange={handleCategoryChange}>
      <option value="all">Все категории</option>
      <option value="electronics">Электроника</option>
      <option value="clothing">Одежда</option>
      {/* Добавьте другие категории по необходимости */}
    </select>
  );
};

export default CategoryFilter;
