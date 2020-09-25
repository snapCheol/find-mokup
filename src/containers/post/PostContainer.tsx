import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeDate,
  changeField,
  changeFile,
  changeSelect,
} from '../../actions/post';
import Post from '../../components/post/Post';
import { RootState } from '../../reducers';

const PostContainer = () => {
  const dispatch = useDispatch();
  const { imgUrl } = useSelector((state: RootState) => state.post);

  const onSubmit = () => {};
  const onCancel = () => {};
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
    (value) => {
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

  return (
    <Post
      imgUrl={imgUrl}
      onSubmit={onSubmit}
      onCancel={onCancel}
      onChangeField={onChangeField}
      onSelect={onSelect}
      onDateChange={onDateChange}
      onFileChange={onFileChange}
    />
  );
};

export default PostContainer;
