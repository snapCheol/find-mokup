import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  changeDate,
  changeField,
  changeFile,
  changeSelect,
  getDonwloadUrl,
  updatePost,
  writePost,
} from '../../redux/actions/write';
import Write from '../../components/write/Write';
import { RootState } from '../../redux/reducers';

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
    currentPostId,
  } = useSelector((state: RootState) => state.write);
  const { write } = useSelector((state: RootState) => state);

  const onSubmit = useCallback(() => {
    if (currentPostId) {
      console.log('update');
      dispatch(
        updatePost(currentPostId, {
          imgUrl,
          title,
          category,
          manager,
          date,
          year,
          month,
        })
      );
    } else {
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
    }

    history.push('/');
  }, [
    dispatch,
    imgUrl,
    title,
    category,
    manager,
    date,
    year,
    month,
    history,
    currentPostId,
  ]);
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
      write={write}
      imgUrl={imgUrl}
      previewImg={previewImg}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onChangeField={onChangeField}
      onSelect={onSelect}
      onDateChange={onDateChange}
      onFileChange={onFileChange}
      currentPostId={currentPostId}
    />
  );
};

export default WriteContainer;
