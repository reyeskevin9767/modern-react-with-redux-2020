import React from 'react';
import SearchBar from './SearchBar';
import youtube, {baseParams} from '../apis/youtube';

class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        ...baseParams,
        q: term,
      },
    });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
