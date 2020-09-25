import React from 'react';
import { Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <Route component={Home} path="/" exact />
      <Route component={PostPage} path="/post" />
      <Route component={DetailPage} path="/detail/:id" />
    </>
  );
}

export default App;
