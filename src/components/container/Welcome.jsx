import { useContext } from 'react';
import { useNavigate } from "react-router-dom"; 
import { AppContext } from "../../auth/UserProvider";

const Welcome = () => {

  const { userSession, logOutUSer } = useContext(AppContext);
  const navigate = useNavigate();
  
  return (
    <div className='welcome'>
        <div className='welcome-p'> 
          { 
            userSession ? 
            <div className='welcome-saludo'>Hola <span>{ userSession.name },</span>
                { 
                  userSession.rol === 'SuperAdmin'?
                  <button className='boton' onClick={ () => navigate('/Dashboard') }>ir a Dashboard</button> 
                  :
                  '  sigue disfrutando de nuestros Productos' 
                } 
              </div>
            : 
            <p className='welcome-saludo'>Bienvenido, disfruta de nuestros Productos</p>
          } 
        </div>

        { userSession ? 
        <button className='boton' onClick={ logOutUSer }>
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