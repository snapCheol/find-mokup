import { Col, Row, Typography } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../redux/actions/auth';
import SearchSelect from '../../components/search/SearchSelect';
import Settings from '../../components/search/Settings';
import { RootState } from '../../redux/reducers';
import { changeSelect, selectSearch } from '../../redux/actions/postList';

const Search = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth);
  const { year, category } = useSelector((state: RootState) => state.postList);

  const history = useHistory();
  const goWrite = () => {
    history.push('/write');
  };
  const goLogin = useCallback(() => {
    history.push('/login');
  }, [history]);
  const onLogout = useCallback(() => {
    dispatch(logout());
    goLogin();
  }, [dispatch, goLogin]);

  const onSelectSearch = useCallback(() => {
    dispatch(selectSearch(year, category));
    history.push('/list');
  }, [dispatch, year, category, history]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      console.log(name, value);
      dispatch(
        changeSelect({
          key: name,
          value,
        })
      );
    },
    [dispatch]
  );
  return (
    <>
      <Row justify="end" style={{ padding: 20 }}>
        <Col>
          <Settings
            goLogin={goLogin}
            onLogout={onLogout}
            goWrite={goWrite}
            auth={auth}
          />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col>
          <Typography.Title>
            <Link to="/">Find Mokup</Link>
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col xs={20} lg={12}>
          <SearchSelect onChange={onChange} onSelectSearch={onSelectSearch} />
        </Col>
      </Row>
    </>
  );
};

export default Search;
