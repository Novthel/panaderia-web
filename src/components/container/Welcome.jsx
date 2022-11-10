/* eslint-disable react-hooks/exhaustive-deps */
import { auth } from "../../firebase/Credentials";
import { signOut } from "firebase/auth";
import { useContext, useEffect, useState } from 'react';
import { appContext } from '../../App';
import { useNavigate } from "react-router-dom"; 
import { getUser } from "../../firebase/userController";

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
        <p className='welcome-p'> { userSession ? `Hola ${ name }, sigue disfrutando de nuestros Productos` : `Bienvenido, disfruta de nuestros Productos` } </p>
        { userSession ? 
        <button className='boton' onClick={ ()=> signOut(auth) }>
          cerrar sesion
        </button>
        :
        <button className='boton' onClick={ ()=>{ navigate('/login')}}>
          iniciar sesion
        </button>
        }
        
    </div>
  )
}

export default Welcome