import { combineReducers } from 'redux';
import books from './_books';
import filter from './_filter';

export default combineReducers({
  books,
  filter: filter.filter,
  categories: ['Fiction', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
});
