import React, { useEffect } from 'react';
import { createGraph } from './createGraph';
import Router from './components/ui/Router';

function App() {
  // useEffect(() => {
  //   createGraph();
  // }, []);

  return (
    <div>
      <div className="container">
        <Router />
      </div>
    </div>
  );
}

export default App;
