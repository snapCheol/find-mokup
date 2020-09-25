import { MokupReqType } from '../types/write';
import { dbService } from './apiConfig';

export const writeWork = async ({
  imgUrl,
  category,
  manager,
  date,
  year,
  month,
}: MokupReqType) => {
  await dbService
    .collection(category)
    .add({ imgUrl, category, manager, date, year, month });
};
