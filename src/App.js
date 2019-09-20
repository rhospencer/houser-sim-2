import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'
import Header from './Components/Header/Header'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      {routes}
    </div>
  );
}

export default App;
