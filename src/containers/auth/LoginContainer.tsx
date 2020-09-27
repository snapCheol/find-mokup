import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeField, login } from '../../redux/actions/auth';
import Login from '../../components/auth/Login';
import { RootState } from '../../redux/reducers';
const LoginContainer = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.loading);
  const { email, password, user, authError } = useSelector(
    (state: RootState) => state.auth
  );

  const history = useHistory();

  const onLogin = useCallback(() => {
    dispatch(login({ email, password }));
  }, [dispatch, email, password]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      dispatch(
        changeField({
          key: name,
          value,
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('auth', JSON.stringify(user));
      } catch (error) {
        console.log('localStroage가 작동하지 않습니다!');
      }
    }
  }, [history, user]);

  return (
    <Login
      onLogin={onLogin}
      onChange={onChange}
      authError={authError}
      loading={loading}
    />
  );
};

export default LoginContainer;
