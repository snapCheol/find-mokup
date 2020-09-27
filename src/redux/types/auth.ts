export type AuthType = {
  email: string;
  password: string;
};

export type AuthStateType = {
  email: string;
  password: string;
  auth: boolean;
  authUser: any;
  authError: Error | null;
};
