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
      category: 'Fiction',
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
    const { title, category } = this.state;
    const { categories } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container bookform">
          <div className="d-flex row">
            <div className="col-lg-7">
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
            </div>
            <div className="col-lg-3">
              <select
                required
                className="form-select"
                name="category"
                aria-label="Default select example"
                onChange={this.handleChange}
              >
                {categories.map(value => (
                  <option
                    selected={category === value}
                    key={uniqid()}
                    value={value}
                  >
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-2">
              <button type="submit" className="btn btn-primary px-5">ADD BOOK</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
};

BooksForm.defaultProps = {
  categories: [],
};

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = {
  createBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
