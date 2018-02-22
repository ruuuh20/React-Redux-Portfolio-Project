import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionActions';

class LoginPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: ''
  }}

  handleFormChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.actions.loginUser(this.state)
  };

  render() {
    return (
      <div>
        <div className="container-fluid row">
          <div className="col-4">
            <form onSubmit = {this.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type = "text"
                  name = "username"
                  placeholder = "username"
                  value = {this.state.username}
                  onChange = {this.handleFormChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type = "password"
                  name = "password"
                  placeholder = "password"
                  value = {this.state.password}
                  onChange = {this.handleFormChange}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">Search</button>
            </form>
          </div>
        </div>
      </div>
  );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(LoginPage);
