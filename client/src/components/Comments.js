import React, { Component } from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/commentActions.js'
import CommentForm from './CommentForm'

class Comments extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      content: "",
      posted: false

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
    this.props.actions.createComment(this.props.listing.id, this.state)

  };

  render() {
    return (
      <div>
        <CommentForm
          comment = {this.state}
          handleFormSubmit = {this.handleFormSubmit}
          handleInputChange = {this.handleInputChange}
        />
      </div>

    );
  }
}

Comments.propTypes = {
  onSubmit: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(Comments)
