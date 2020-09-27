import { MokupReqType } from '../redux/types/write';
import { dbService, storageService } from './apiConfig';
import { v4 as uuidv4 } from 'uuid';

export const readPost = async (postId: string) => {
  const response = await dbService.collection('works').doc(`${postId}`).get();
  const resData = {
    id: postId,
    ...response.data(),
  };
  return resData;
};

export const deletePost = async (postId: string) => {
  await dbService.collection('works').doc(`${postId}`).delete();
};

export const getListPost = async () => {
  const response = await dbService
    .collection('works')
    .orderBy('date', 'desc')
    .get()
    .then((doc) => {
      return doc;
    });
  const postList = response.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return postList;
};

export const selectSearchListPost = async ({ year, category }: any) => {
  if (year === '' && category === '') {
    const response = await dbService
      .collection('works')
      .orderBy('date', 'desc')
      .get()
      .then((doc) => {
        return doc;
      });
    const postList = response.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return postList;
  } else if (year !== '' && category !== '') {
    const response = await dbService
      .collection('works')
      .where('year', '==', `${year}`)
      .where('category', '==', `${category}`)
      .get()
      .then((doc) => {
        return doc;
      });
    const postList = response.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return postList;
  } else if (year !== '' && category === '') {
    const response = await dbService
      .collection('works')
      .where('year', '==', `${year}`)
      .get()
      .then((doc) => {
        return doc;
      });
    const postList = response.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return postList;
  } else if (year === '' && category !== '') {
    const response = await dbService
      .collection('works')
      .where('category', '==', `${category}`)
      .get()
      .then((doc) => {
        return doc;
      });
    const postList = response.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return postList;
  }
};

export const writeWork = async ({
  title,
  imgUrl,
  category,
  manager,
  date,
  year,
  month,
}: MokupReqType) => {
  const response = await dbService
    .collection('works')
    .add({ title, imgUrl, category, manager, date, year, month });
  return await response.get();
};

export const updateWork = async ({
  currentPostId,
  title,
  imgUrl,
  category,
  manager,
  date,
  year,
  month,
}: MokupReqType) => {
  const response = await dbService
    .doc(`works/${currentPostId}`)
    .update({ title, imgUrl, category, manager, date, year, month });
  return response;
};

export const storageWork = async (value: string) => {
  let attachmentUrl;
  if (value !== '') {
    const attachmentRef = storageService.ref().child(`${uuidv4()}`);
    const response = await attachmentRef.putString(value, 'data_url');
    attachmentUrl = await response.ref.getDownloadURL();

    return attachmentUrl;
  }
};
