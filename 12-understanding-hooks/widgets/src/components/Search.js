import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  console.log('I run everytime');

  useEffect(() => {
    console.log('I run after term changes');
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            className="input"
            value={term}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
