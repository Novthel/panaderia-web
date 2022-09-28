import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Header from './components/container/Header';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
      <Header />  
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/info' element={ <About /> } />
          <Route path='/login' element={ <LoginPage /> } />
          <Route path='/registro' element={ <RegisterPage /> } />
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
