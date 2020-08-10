import React from 'react';
import ReactDOM from 'react-dom';

//* Class Component
class App extends React.Component {
  render() {
    // Get location of user
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
