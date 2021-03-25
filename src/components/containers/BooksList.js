/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import key from 'uniqid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Book from '../items/Book';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!_.isEqual(prevState.books, nextProps.books)) {
      return {
        books: nextProps.books,
      };
    }

    return null;
  }

  render() {
    const { books } = this.state;

    return (
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>CATEGORY</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (<Book book={book} key={key()} />))}
        </tbody>
      </table>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.array,
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = ({ books: { books } }) => ({
  books,
});

export default connect(mapStateToProps, {})(BooksList);
