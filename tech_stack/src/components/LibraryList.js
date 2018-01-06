import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    // init a datasource for list view
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow} // need to specify how to render a single row
      />
    );
  }
}

// return some desired props from global state in the store
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// connect the component and application state store
export default connect(mapStateToProps)(LibraryList);
