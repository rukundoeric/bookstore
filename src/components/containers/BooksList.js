import React from 'react';
import key from 'uniqid';
import PropTypes from 'prop-types';
import Book from '../items/Book';

const books = [
  {
    id: 'SK449D',
    title: 'The story of my life',
    category: 'fiction',
  },
];

function BooksList() {
  return (
    <table>
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

export default BooksList;
