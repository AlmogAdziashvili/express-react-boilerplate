import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import { Grid } from '@material-ui/core';

// Redux Actions
// import watchListActions from '../../modules/watch_list/watch_list_actions';

function Homepage() {
  return (
    <>

    </>
  );
}

Homepage.propTypes = {

};

function mapStateToProps(state) {
  return {
    // watchListScope: state.watchList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // watchListActionsAPI: bindActionCreators(watchListActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
