import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// Redux store to component props

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Take all data from state and become props
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// Need conenct to get data from state
// Config connect with mapStateToProps and link to SongList component
export default connect(mapStateToProps, { selectSong })(SongList);

// this.props === {songs: state.songs}
