import React from 'react';
import key from 'uniqid';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook, changeFilter } from '../../redux/actions';
import Book from '../items/Book';
import CategoryFilter from '../layouts/CategoryFilter';

function BooksList({
  books, deleteBook, changeFilter, categories, filter,
}) {
  const handleDeleteBook = ({ target: { dataset: { id } } }) => {
    deleteBook(id);
  };

  const handleFilterChange = ({ target: { value } }) => {
    changeFilter(value);
  };

  const booksList = filter === 'All' ? books : _.filter(books, book => book.category === filter);

  return (
    <div className="shadow p-3 mb-5 bg-body rounded">
      <div>
        <CategoryFilter
          categories={categories}
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div>
        <table className="table table-striped table-hover">
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
            {
              booksList.length <= 0
                ? (
                  <tr>
                    <th colSpan="5" className="text-center">
                      No record found!
                    </th>
                  </tr>
                )
                : (
                  booksList.map((book, i) => (
                    <Book handleDeleteBook={handleDeleteBook} index={i} book={book} key={key()} />
                  ))
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = ({ books, filter: { filter }, categories }) => ({
  books,
  filter,
  categories,
});

const mapDispatchToProps = {
  deleteBook,
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
