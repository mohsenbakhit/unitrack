import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/home';
import LoginPage from './pages/LoginPage/login';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App