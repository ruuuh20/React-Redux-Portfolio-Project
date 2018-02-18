import React, { Component } from 'react';
import PropTypes from "prop-types";

class CommentsForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      content: "",

    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({confirmation: true})
  };

  render() {
    return (
      <div className="comment-box">
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label forHtml="name">name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label forHtml="email">email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label forHtml="email">comment</label>
          <textarea
            id="content"
            type="text"
            name="content"
            rows="7"
            value={this.state.content}
            onChange={this.handleInputChange}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">Add Comment</button>
      </form>
      </div>
    );
  }
}

CommentsForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default CommentsForm;
