import React from 'react';
import ReactDOM from 'react-dom';

//* Class Component
class App extends React.Component {
  // Initize state object
  constructor(props) {
    // References the parent's constuctor
    super(props);

    // Onlt time for direct assignment of state
    this.state = { lat: null, errorMessage: '' };

    // Get location of user
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //Upate state object
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // When setstate is updated, React calls the render method again
  // Must define render with class component
  render() {
    // Show just error message
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    // Show just latitude
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
