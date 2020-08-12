import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

//* Class Component
class App extends React.Component {
  // // Initize state object
  // constructor(props) {
  //   // References the parent's constuctor
  //   super(props);

  //   // Only time for direct assignment of state
  //   this.state = { lat: null, errorMessage: '' };
  // }

  // Same as defining contructor and initizing state
  state = { lat: null, errorMessage: '' };

  // Called only once when component runs first time
  componentDidMount() {
    // Get location of user
    // Upate state object
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // // Function is called anytime the component renders
  // componentDidUpdate() {
  //   console.log('My component was just updated - it rerenedered');
  // }

  // When setstate is updated, React calls the render method again
  // Must define render with class component
  render() {
    // Show just error message
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    // Show just latitude
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>;
    }

    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
