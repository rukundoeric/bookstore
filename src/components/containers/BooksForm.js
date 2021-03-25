/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function BooksForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" name="title" className="form-control" id="title" placeholder="Title" />
      </div>
      <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="Fiction">Fiction</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default BooksForm;
