import { Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import './index.css';
function App() {
  return (
    <CookiesProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
    </CookiesProvider>
  );
}

export default App