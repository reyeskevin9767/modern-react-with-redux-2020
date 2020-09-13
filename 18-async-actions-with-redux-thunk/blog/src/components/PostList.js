import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

// Component gets renedered onto the screen
// componentDidMount gets called
// Call action creator in componentDidMount
// Action creator runs code to make an api request
// Api responds with data
// Action creator returns an 'action' with the fetched data on the 'payload' property
// Some reducer sees the action, returns the data off the 'payload'
// Generated some new state object, redux/react-redux cause app to rerendered

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
