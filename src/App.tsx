import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { authService } from './api/apiConfig';

import DetailPage from './pages/DetailPage';
import Home from './pages/Home';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import { fetchUser, logout } from './redux/actions/auth';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchUser(user));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
