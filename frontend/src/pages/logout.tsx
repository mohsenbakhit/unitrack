import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const navigate = useNavigate();

  const signOut = () => {
    removeCookie('user');
    navigate('/login');
  };

  return { signOut };
};