import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';

export default function LogoutPage() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            removeCookie('user', { path: '/' });
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p>Logging out...</p>
        </div>
    );
}
