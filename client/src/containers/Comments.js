import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/commentActions.js'
import CommentForm from '../components/CommentForm'
import CommentView from '../components/CommentView'

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: props.listingId,
      comments: [],
      name: "",
      email: "",
      content: "",
      posted: false

    };
  }

  componentDidMount(){
    const listingId = this.state.listingId
    this.props.actions.fetchComments(listingId)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.actions.createComment(this.state.listingId, this.state)
    this.setState({
      posted: true
    })
  };

  render() {
    let form
    this.state.posted? form = null
    :form = <CommentForm comment = {this.state}
          handleFormSubmit = {this.handleFormSubmit}
          handleInputChange = {this.handleInputChange}/>
<<<<<<< HEAD
    const comments = this.props.comments.map(comment => <CommentView comment = {comment} />)
=======
    const comments = this.props.comments.map(comment => <CommentView comment = {comment} />).reverse()
>>>>>>> dev
    return (
      <div className="comments-section">
        <p className="comments-title">Listing Comments</p>
        {comments}
        {form}
      </div>

    );
  }
}


const mapStateToProps = (state, props) => {
  return { comments: state.comments.comments, listingId: props.listingId};
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
