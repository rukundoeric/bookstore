/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import key from 'uniqid';

function CategoryFilter({ categories, handleFilterChange, filter }) {
  return (
    <div className="row">
      <label htmlFor="category" className="form-label d-flex">
        <select
          required
          className="form-select"
          aria-label="Default select example"
          onChange={handleFilterChange}
        >
          {['All', ...categories].map(value => (
            <option
              selected={filter === value}
              key={key()}
              value={value}
            >
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes.array.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default CategoryFilter;
