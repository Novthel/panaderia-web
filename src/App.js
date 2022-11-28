import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { useContext } from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import About from './pages/About';
import Menu from './pages/Menu';
import Dashboard from './pages/Dashboard';
import RequireAuth from './auth/RequireAuth';
import { AppContext } from './auth/UserProvider';




function App() {
  const { userSession } = useContext(AppContext);

  return (
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/info' element={ <About /> } />
              <Route path='/login' element={ <LoginPage /> } />
              <Route path='/registro' element={ <RegisterPage /> } />
              <Route path='/menu' element={ <Menu /> } />
              <Route path='/menu' element={ <Menu /> } />
              <Route path='/Dashboard' 
                element= { 
                  <RequireAuth isAllowed={ !!userSession && userSession.rol === 'SuperAdmin' }> 
                    <Dashboard />
                  </RequireAuth> 
                } />    
                
          </Routes>     
  );
}

export default App;
