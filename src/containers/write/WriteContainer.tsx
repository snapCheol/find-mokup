import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  changeDate,
  changeField,
  changeFile,
  changeSelect,
  getDonwloadUrl,
  writePost,
} from '../../actions/write';
import Write from '../../components/write/Write';
import { RootState } from '../../reducers';

const WriteContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    imgUrl,
    title,
    category,
    manager,
    date,
    year,
    month,
    previewImg,
  } = useSelector((state: RootState) => state.write);

  const onSubmit = useCallback(() => {
    dispatch(
      writePost({
        imgUrl,
        title,
        category,
        manager,
        date,
        year,
        month,
      })
    );
  }, [dispatch, imgUrl, title, category, manager, date, year, month]);
  const onCancel = () => {
    history.goBack();
  };
  const onChangeField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      dispatch(
        changeField({
          key: name,
          value,
        })
      );
    },
    [dispatch]
  );
  const onSelect = useCallback(
    (value) => {
      dispatch(changeSelect(value));
    },
    [dispatch]
  );

  const onDateChange = useCallback(
    (date, value) => {
      dispatch(changeDate(value));
    },
    [dispatch]
  );

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      if (files) {
        const file = files && files[0];
        const fileReader = new FileReader();
        let dataUrl;
        fileReader.onloadend = (finishedEvent) => {
          dataUrl = finishedEvent.target?.result;
          dispatch(changeFile(dataUrl));
        };
        fileReader.readAsDataURL(file);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (previewImg !== '') {
      dispatch(getDonwloadUrl(previewImg));
    }
  }, [dispatch, previewImg]);

  return (
    <Write
      imgUrl={imgUrl}
      previewImg={previewImg}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onChangeField={onChangeField}
      onSelect={onSelect}
      onDateChange={onDateChange}
      onFileChange={onFileChange}
    />
  );
};

export default WriteContainer;
