/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import key from 'uniqid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Book from '../items/Book';

function BooksList(props) {
  const [books, setBooks] = useState(props.books);

  useEffect(() => {
    setBooks(props.books);
  }, [props.books]);

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
  books: PropTypes.array,
};

BooksList.defaultProps = {
  books: {},
};

const mapStateToProps = ({ books: { books } }) => ({
  books,
});

export default connect(mapStateToProps, {})(BooksList);
