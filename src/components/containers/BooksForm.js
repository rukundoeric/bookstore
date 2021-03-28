import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { createBook } from '../../redux/actions';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Fiction', // default category
      categories: ['Fiction', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'], // Book categories
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { createBook } = this.props;
    const { title, category } = this.state;
    const book = {
      id: `${uniqid()}_${uniqid()}`.toUpperCase(),
      title,
      category,
    };
    createBook(book);
    e.target.reset();
    this.setState({ title: '', category: 'Select category' });
  };

  handleChange = e => {
    const { value } = e.target;
    switch (e.target.name) {
      case 'title':
        this.setState({ title: value });
        break;
      case 'category':
        this.setState({ category: value });
        break;
      default:
    }
  }

  render() {
    const { title, category, categories } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="title" className="form-label col-lg--12">
            Title
            <input
              required
              type="text"
              name="title"
              value={title}
              className="form-control"
              id="title"
              placeholder="Title"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="category" className="form-label col-lg--12">
            Category
            <select
              required
              className="form-select"
              name="category"
              aria-label="Default select example"
              onChange={this.handleChange}
            >
              {categories.map(value => (
                <option
                  defaultValue={category === value}
                  key={uniqid()}
                  value={value}
                >
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createBook,
};

export default connect(null, mapDispatchToProps)(BooksForm);
