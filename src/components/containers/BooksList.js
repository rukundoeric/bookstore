/* eslint-disable react/forbid-prop-types */
import React from 'react';
import key from 'uniqid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../items/Book';

function BooksList({ books }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, i) => (<Book index={i} book={book} key={key()} />))}
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

const mapStateToProps = ({ books }) => ({
  books,
});

export default connect(mapStateToProps)(BooksList);
