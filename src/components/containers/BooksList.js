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
    <div className="p-3 mb-5">
      <div>
        <CategoryFilter
          categories={categories}
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div className="listItems">
        {
          booksList.length <= 0
            ? (
              <div className="container">
                <h5 className="text-center mt-4">
                  No record found!
                </h5>
              </div>
            )
            : (
              booksList.map((book, i) => (
                <Book handleDeleteBook={handleDeleteBook} index={i} book={book} key={key()} />
              ))
            )
        }
        {/* <table className="table table-striped table-hover">
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

          </tbody>
        </table> */}
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
