import React from 'react';
import './App.css';
import SalesFormContainer from "./container/salesForm"
import SalesEntryContainer from "./container/salesEntry"
import SalesVisualizationContainer from "./container/salesVisualization"

function App() {
  return (
    <div className="App">
      <SalesFormContainer />
      <SalesEntryContainer />
      <SalesVisualizationContainer />
    </div>
  );
}

export default App;
