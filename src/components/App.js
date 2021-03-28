import React from 'react';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
import '../assets/css/style.css';

function App() {
  return (
    <div className="container">
      <div className="container mt-5">
        <BooksForm />
      </div>
      <div className="container mt-3">
        <BooksList />
      </div>
    </div>
  );
}

export default App;
