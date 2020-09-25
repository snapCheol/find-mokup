import { MokupReqType } from '../types/write';
import { dbService, storageService } from './apiConfig';
import { v4 as uuidv4 } from 'uuid';

export const readPost = async (postId: string) => {
  const response = await dbService.collection('works').doc(`${postId}`).get();
  return response.data();

  // return response;
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
  await dbService
    .collection('works')
    .add({ title, imgUrl, category, manager, date, year, month });
};

export const storageWork = async (value: string) => {
  console.log(value);
  let attachmentUrl;
  if (value !== '') {
    const attachmentRef = storageService.ref().child(`${uuidv4()}`);
    const response = await attachmentRef.putString(value, 'data_url');
    attachmentUrl = response.ref.getDownloadURL();
    console.log(attachmentUrl);
    return attachmentUrl;
  }
};
