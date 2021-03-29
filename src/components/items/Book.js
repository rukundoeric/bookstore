import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, handleDeleteBook }) {
  return (
    <div className="mt-3 p-4 item bg-body rounded d-flex flex-column">
      <span className="category">{book.category}</span>
      <span className="title">{book.title}</span>
      <span className="id">{book.id}</span>
      <div className="pt-3">
        <button
          data-id={book.id}
          type="button"
          className="delButton"
          onClick={handleDeleteBook}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleDeleteBook: PropTypes.func.isRequired,
};

export default Book;
