import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return <div>PageOne <Link to="/pagetwo">Naviagate to page two</Link></div>;
};
const PageTwo = () => {
  return <div>Pagetwo <Link to="/">Naviagate to page one</Link></div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
