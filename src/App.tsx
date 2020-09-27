import React from 'react';
import { Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Route component={Home} path="/" exact />
      <Route component={ListPage} path="/list" />
      <Route component={LoginPage} path="/login" />
      <Route component={WritePage} path="/write" />
      <Route component={DetailPage} path="/detail/:postId" />
    </>
  );
}

export default App;
