import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Book({ book, handleDeleteBook }) {
  return (
    <div className="item bg-body rounded mt-3 p-4">
      <div className="row">
        <div className="d-flex flex-column col-lg-5">
          <span className="category">{book.category}</span>
          <span className="title">{book.title}</span>
          <span className="id">{book.id}</span>
          <div className="pt-3">
            <button
              data-id={book.id}
              type="button"
              className="delButton"
              onClick={handleDeleteBook}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="col-lg-4 d-flex progress-cont justify-content-center align-items-center">
          <div className="d-flex flex-row pro-div">
            <div className="progress-cicl">
              <CircularProgressbar value={42} text="" />
            </div>
            <div className="progress-desc d-flex flex-column pl-3">
              <span className="num-p">42%</span>
              <small>Completed</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 progress-info d-flex justify-content-center align-items-center mt-sm-3">
          <div className="d-flex flex-column ml-3">
            <span className="p-info-c-c ml-3">CURRENT CHAPTER</span>
            <span className="p-info-c">Chapter 12</span>
            <button type="button" className="btn btn-primary px-3 mt-2">UPDATE PROGRESS</button>
          </div>
        </div>

      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleDeleteBook: PropTypes.func.isRequired,
};

export default Book;
