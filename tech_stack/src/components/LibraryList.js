import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {

    return;
  }
}

// return some desired props from global state in the store
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// connect the component and application state store
export default connect(mapStateToProps)(LibraryList);
