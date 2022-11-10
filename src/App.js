import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import About from './pages/About';
import Menu from './pages/Menu';
import ProductDetails from './components/container/ProductDetails';
import { Toaster } from 'react-hot-toast'
import { auth } from './firebase/Credentials';
import { onAuthStateChanged } from 'firebase/auth';
import Dashboard from './pages/Dashboard';

export const appContext = createContext(null);

function App() {

  const [ userSession, setUserSession ] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
        if(userFirebase) {
          setUserSession(userFirebase)
        }else {
          setUserSession(null)
        }
  })

  return (
        <appContext.Provider value={{ userSession, setUserSession }}>
            <BrowserRouter>
              <Toaster />
              <Routes>
                  <Route path='/' element={ <Home /> } />
                  <Route path='/info' element={ <About /> } />
                  <Route path='/login' element={ <LoginPage /> } />
                  <Route path='/registro' element={ <RegisterPage /> } />
                  <Route path='/menu' element={ <Menu /> } />
                  <Route path='/producto/:id' element={ <ProductDetails /> } />
                  <Route path='/Dashboard' element={ <Dashboard /> } />
              </Routes>
            
            </BrowserRouter>
        </appContext.Provider>
  );
}

export default App;
