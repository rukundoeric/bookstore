import React from 'react';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
import Header from './layouts/Header';
import '../assets/css/style.css';

function App() {
  return (
    <div className="content">
      <Header />
      <div className="container mt-3">
        <BooksList />
      </div>
      <div className="container mt-5">
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
