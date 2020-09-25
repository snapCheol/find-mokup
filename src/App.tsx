import React from 'react';
import { Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Route component={Home} path="/" exact />
      <Route component={WritePage} path="/write" />
      <Route component={DetailPage} path="/detail/:id" />
    </>
  );
}

export default App;
