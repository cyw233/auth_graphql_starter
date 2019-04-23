import React from 'react';
import Header from './Header';

// No need to use any class level state
const App = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
}

export default App;
