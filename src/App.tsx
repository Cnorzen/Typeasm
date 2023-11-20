import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './pages/Navbar';
import Footer from './pages/footer';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <br/>

      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Detail" element={<Detail/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <br/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
