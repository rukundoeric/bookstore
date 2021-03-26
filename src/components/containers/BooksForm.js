/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { createBook } from '../../redux/actions';

function BooksForm({ dispatch }) {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const book = {
      id: `${uniqid()}-${uniqid()}`.toUpperCase(),
      title: formData.get('title'),
      category: formData.get('category'),
    };
    dispatch(createBook(book));
    e.target.reset();
  };

  const categories = ['Fiction', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" required name="title" className="form-control" id="title" placeholder="Title" />
      </div>
      <select className="form-select" required name="category" aria-label="Default select example">
        <option defaultValue>Select category</option>
        {categories.map(value => (<option key={uniqid()} value={value}>{value}</option>))}
      </select>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>
  );
}

BooksForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(BooksForm);
