import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RevenueGraph from '../Components/RevenueGraph';
import {store} from '../reducers/index'
import { loadRevenueData } from '../actions';

function Container (){


  return (
    <RevenueGraph>
    </RevenueGraph>  
  );
}

const Container = connect(
  mapDispatchToProps,
  mapStateToProps,
)(Container_)

export default Container;
