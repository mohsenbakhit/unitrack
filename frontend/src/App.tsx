import { Routes, Route } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie'
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import './index.css';
import LogoutPage from './pages/logout';

function App() {
  const [cookies, setCookie] = useCookies(['user'])

  function handleLogin(user: any) {
    setCookie('user', user, { path: '/' })
  }
  return (
    <CookiesProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage username={"Guest"} />}/>
        <Route path="/login" element={<LoginPage onLogin={handleLogin}/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </CookiesProvider>
  );
}

export default App