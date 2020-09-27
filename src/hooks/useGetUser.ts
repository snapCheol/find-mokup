import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

export default function useGetUser() {
  const { user } = useSelector((state: RootState) => state.auth);
  return user;
}
