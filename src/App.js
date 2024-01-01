import React from 'react';
import Router from './components/ui/Router';
import Header from './components/Header';

function App() {
  // useEffect(() => {
  //   createGraph();
  // }, []);

  return (
    <div className="container">
      <Header />
      <Router />
    </div>
  );
}

export default App;
