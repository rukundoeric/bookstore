/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function BooksForm(props) {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" required name="title" className="form-control" id="title" placeholder="Title" />
      </div>
      <select className="form-select" required name="category" aria-label="Default select example">
        <option defaultValue>Select category</option>
        <option value="Fiction">Fiction</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>
  );
}

BooksForm.propTypes = {
  createBook: PropTypes.func,
};

export default connect(null, { })(BooksForm);
