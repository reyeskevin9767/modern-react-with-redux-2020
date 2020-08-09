//* Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//* Reference JS functions in JSX with {}
// function getButtonText() {
//   return 'Click on me!';
// }

//* Create a react component
const App = () => {
  // Reference JS variables in JSX with {}
  const buttonText = { text: 'click me' };
  // const style = { backgroundColor: 'blue', color: 'white' }
  const labelText = 'Enter name:';

  return (
    <div>
      {/* Need to use className for class in JSX */}
      <label className="label" htmlFor="name">
        {labelText}
      </label>

      <input id="name" type="text" />

      {/* Need to use double {} to use styles in JSX */}
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {/* <button style={style}> */}
        {buttonText.text}
      </button>
    </div>
  );
};

//* Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
