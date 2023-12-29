import React, { useEffect } from 'react';
import { createGraph } from './createGraph';
import Register from './components/pages/register/Register';

function App() {
  // useEffect(() => {
  //   createGraph();
  // }, []);

  return (
    <div>
      <div className="container">
        <Register />
      </div>
    </div>
  );
}

export default App;
