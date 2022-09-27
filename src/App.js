import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Info from './components/pure/Info';
import Home from './pages/Home';
import Header from './components/container/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />  
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/info' element={ <Info /> } />
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
