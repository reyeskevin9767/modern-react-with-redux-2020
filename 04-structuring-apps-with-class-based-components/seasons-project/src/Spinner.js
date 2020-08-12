import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// Set a default value if not given
Spinner.defaultProps = {
  mesasge: 'Loading'
};

export default Spinner;
