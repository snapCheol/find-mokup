import { AuthType } from '../redux/types/auth';
import { authService } from './apiConfig';

export const login = async ({ email, password }: AuthType) => {
  const response = await authService.signInWithEmailAndPassword(
    email,
    password
  );
  return response;
};

export const logout = () => {
  authService.signOut();
};
