import React from 'react';
import PropTypes from 'prop-types';

function Book({ index, book, handleDeleteBook }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button
          data-id={book.id}
          type="button"
          className="badge bg-danger"
          onClick={handleDeleteBook}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleDeleteBook: PropTypes.func.isRequired,
};

export default Book;
