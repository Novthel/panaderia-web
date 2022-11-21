/* eslint-disable react-hooks/exhaustive-deps */
import { auth } from "../../firebase/Credentials";
import { signOut } from "firebase/auth";
import { useContext, useEffect, useState } from 'react';
import { appContext } from '../../App';
import { useNavigate } from "react-router-dom"; 
import { getUser } from "../../firebase/UserController";

const Welcome = () => {

  const { userSession } = useContext(appContext);
  const [name, setName] = useState('')
  const navigate = useNavigate();


  useEffect(() => {
    if(userSession) {
      getUser(userSession.uid)
        .then(userData =>setName(userData.name) )
    }
  }, [userSession])
  
  return (
    <div className='welcome'>
        <div className='welcome-p'> 
          { 
            userSession ? 
            <p className='welcome-saludo'>Hola, <span>{ name }</span> sigue disfrutando de nuestros Productos</p>
            : 
            <p className='welcome-saludo'>Bienvenido, disfruta de nuestros Productos</p>
          } 
        </div>

        { userSession ? 
        <button className='boton' onClick={ ()=> signOut(auth) }>
          Salir
        </button>
        :
        <button className='boton' onClick={ ()=>{ navigate('/login')}}>
          iniciar
        </button>
        }
        
    </div>
  )
}

export default Welcome