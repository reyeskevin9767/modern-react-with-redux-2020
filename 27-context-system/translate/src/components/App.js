import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
  state = { language: 'english' };

  onLanguage = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguage('english')}></i>
          <i className="flag nl" onClick={() => this.onLanguage('dutch')}></i>
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
