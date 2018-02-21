import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/realtorActions.js'

class RealtorDashboard extends Component  {

  constructor(props){
    super(props);
    this.state = {
      realtorId: props.realtorId,
      realtor: props.realtor
    }
  }

  componentDidMount() {
    const realtorId = this.state.realtorId
    this.props.actions.fetchRealtor(realtorId)
}

  componentWillReceiveProps(nextProps){
    this.setState({
      realtor: nextProps.realtor
    })
  }

  render (){
  return (
    <div>
      {this.state.realtor.id}
    </div>
  )}
}

const mapStateToProps = (state) => {
  return { realtor: state.realtors.realtor};
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(RealtorDashboard)
