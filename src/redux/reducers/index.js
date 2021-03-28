import { combineReducers } from 'redux';
import books from './_books';
import filter from './_filter';

const categories = () => ['Fiction', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export default combineReducers({
  books,
  filter,
  categories,
});
