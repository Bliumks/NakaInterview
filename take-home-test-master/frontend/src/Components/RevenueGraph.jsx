import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Graph from './Graph';
import { connect } from 'react-redux';
import { store } from "../reducers/index";

import {loadRevenueData} from "../actions/index";

const RevenueGraph_ = props => {
    props.loadRevenueData()//this is from /actions/index.js
    

    return (
      <Card>
        {store.getState().reducer.revenue}
        <Graph></Graph>
      </Card>
    );
};

function mapStateToProps(state) {
    return {
        revenue: state.reducer.revenue
    }
}

const mapDispatchToProps = {
    loadRevenueData
}

const RevenueGraph = connect(
    // mapStateToProps,
    mapDispatchToProps,
)(RevenueGraph_);

export default RevenueGraph;