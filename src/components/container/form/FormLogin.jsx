import { Formik , Form , Field , ErrorMessage } from 'formik';
import { useContext } from 'react'
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../../../firebase/userController';
import { AppContext } from '../../../auth/UserProvider';



const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('<i> Invalid email format')
                .required('<i> email is required.'),
        password: Yup.string()
                .required('<i> Password is required.')
    }
)

/**
 * 
 * @returns the login form
 */

export default function LoginFormik() {
    const navigate = useNavigate()
    const { login } = useContext(AppContext);
    
    const initialCredentials = {
            email:'',
            password:''
    } 

    /**
     * The getUserRol function gets information from the user and redirects based on the user's role (SuperAdmin => Dashboard; user => Home)
     * @param {*} id 
     */

    const getUserRol =async (id)=> {
        const user = await getUser(id)
        
        if(user.rol === 'SuperAdmin'){
            navigate('/Dashboard');
        }else {
            navigate('/');
        }
    }


    /**
     * The LoginUser function is called to make the connection with firebase to authenticate with email and password
     * @param { email, password } values 
     */

    const loginUser = async(values)=> {
        const { email, password } = values;

        try {
            const userCredential = await login(email, password);
            getUserRol( userCredential.user.uid)
        } catch (error) {
            console.log(error.code);
            switch (error.code){
                case "auth/user-not-found":
                    alert("Usuario no registrado");
                    break;
                case "auth/wrong-password":
                    alert("Email o Contraseña incorrecta");
                    break;
                default:
                    alert("Error, intentelo más tarde");
            }
        }
    }

    return (
        <div className='container-form'>
            <legend>Login</legend>
            <Formik 
                initialValues = { initialCredentials }
                validationSchema = { loginSchema }
                onSubmit={ (values) => loginUser(values) }
                >

                {({ isSubmitting }) => (
                    <Form>
                        <div className='form-group'>   
                            <Field id="email" className='form-field' type="email" name="email" placeholder="introduzca su correo" />
                            <label  className='form-label' htmlFor="email">Email</label>
                            <ErrorMessage name="email" component='div'  className='form-msg' />
                        </div>
                        <div className='form-group'>
                            <Field id="password" className='form-field' type="password" name="password" placeholder="Introduzca una contraseña" />
                            <label htmlFor="password" className='form-label' >Password</label>
                            <ErrorMessage name="password" component='div'  className='form-msg' />
                        </div>
                        <div className='form-group py-3'>
                            <div className='btn-submit'>
                                <button type="submit" className='boton'>Iniciar</button>
                            </div>
                        </div>
                        <div className='text-msg'>
                            <p className='text-p'>¿No tienes cuenta?</p>
                            <Link to='/registro' className='link-msg'>Registrate</Link>
                        </div>   
                    </Form>
                )}  
            </Formik>
        </div>
    )
}
