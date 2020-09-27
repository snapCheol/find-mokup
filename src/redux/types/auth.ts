export type AuthType = {
  email: string;
  password: string;
};

export type AuthStateType = {
  email: string;
  password: string;
  user: any;
  authError: Error | null;
};
