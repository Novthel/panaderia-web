import { Navigate, Outlet } from 'react-router-dom';


/**
 * The requireAuth function tests whether the user has permissions to enter the path passed as a child.
 * @param {isAllowed} param0 
 * @returns 
 */
const RequireAuth = ({ isAllowed, children }) => {

  if(!isAllowed){
    return <Navigate to='/' />
  }
  return children? children : <Outlet />;
  
}


export default RequireAuth;
