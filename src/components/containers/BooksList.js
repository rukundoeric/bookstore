/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import key from 'uniqid';
import { connect } from 'react-redux';
import Book from '../items/Book';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
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

const mapStateToProps = ({ books: { books } }) => ({
  books,
});

export default connect(mapStateToProps, {})(BooksList);
