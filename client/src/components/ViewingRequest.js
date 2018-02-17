import React, { Component } from 'react';
import PropTypes from "prop-types";

class ViewingRequest extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      message: "",
      confirmation: false
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({confirmation: true})
  };

  render() {
    let view = null
    if (this.state.confirmation) {view = <h5>Message Sent!</h5>}
    else {view =
    <form onSubmit={this.handleFormSubmit}>
      <div>
        <label>
          email
          <input
            id="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          message
          <br />
          <textarea
            id="message"
            name="message"
            rows="7"
            placeholder={`Hello! I am interested in viewing ${this.props.address}`}
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </label>
      </div>
      <div>
        <button type="submit">Send Message</button>
      </div>
    </form>}
    return (
      <div>
       {view}
      </div>
    );
  }
}

ViewingRequest.propTypes = {
  onSubmit: PropTypes.func,
};

export default ViewingRequest;
