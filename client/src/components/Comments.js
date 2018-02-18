import React, { Component } from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/commentActions.js'
import CommentForm from './CommentForm'
import CommentView from './CommentView'

class Comments extends React.Component {
  constructor() {
    super();

    this.state = {
      listingId: "",
      listingComments: [],
      name: "",
      email: "",
      content: "",
      posted: false

    };
  }

  componentWillReceiveProps(props){
    this.setState({
      listingId: props.listingId,
      listingComments: props.listingComments
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      posted: true
    })
    this.props.actions.createComment(this.state.listing.id, this.state)

  };

  render() {
    const form = <CommentForm comment = {this.state}
          handleFormSubmit = {this.handleFormSubmit}
          handleInputChange = {this.handleInputChange}/>
    const comments = this.state.listingComments.map(comment => <CommentView comment = {comment} />)
    return (
      <div>
        {comments}
        {form}
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
