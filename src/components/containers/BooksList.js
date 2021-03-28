/* eslint-disable react/forbid-prop-types */
import React from 'react';
import key from 'uniqid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../../redux/actions';
import Book from '../presentational/Book';

function BooksList({ books, deleteBook }) {
  const handleDeleteBook = ({ target: { dataset: { id } } }) => {
    deleteBook(id);
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, i) => (
          <Book handleDeleteBook={handleDeleteBook} index={i} book={book} key={key()} />
        ))}
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const mapStateToProps = ({ books }) => ({
  books,
});

const mapDispatchToProps = {
  deleteBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
