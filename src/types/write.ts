export type ChangeFieldType = {
  key: string | null;
  value: string | null;
};

export type MokupResType = {
  title: string | null;
  imgUrl: string;
  category: string;
  manager: string | null;
  date: string | null;
  year: string | null;
  month: string | null;
  post: any;
  postError: Error | null;
  previewImg: string;
  getUrlError: Error | null;
  currentPostId: string | null;
};
export type MokupReqType = {
  postId?: string | null;
  title: string | null;
  imgUrl: string;
  category: string;
  manager: string | null;
  date: string | null;
  year: string | null;
  month: string | null;
};
