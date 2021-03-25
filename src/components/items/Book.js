/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Book({ index, book }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Book;
