import React from 'react';
import { Router } from "@reach/router"
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Login path="/login" />
    </Router>
  );
}

export default App;
