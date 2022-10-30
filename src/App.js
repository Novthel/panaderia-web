import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import About from './pages/About';
import Menu from './pages/Menu';
import ProductDetails from './components/container/ProductDetails';
import Header from './components/container/Header';

function App() {
  return (
    <BrowserRouter>
     <Header />  
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/info' element={ <About /> } />
          <Route path='/login' element={ <LoginPage /> } />
          <Route path='/registro' element={ <RegisterPage /> } />
          <Route path='/menu' element={ <Menu /> } />
          <Route path='/producto/:id' element={ <ProductDetails /> } />
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
