import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/Credentials';
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';

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
    const navigate = useNavigate();
    
    const initialCredentials = {
            email:'',
            password:''
        }
        
    const loginUser =(values)=> {
        const { email, password } = values;
    
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                navigate('/')
            })
            .catch((error) => {
                toast('Correo o password invalido')
        });
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
                            <Field id="password" className='form-field' type="password" name="password" placeholder="Introduzaca una contraseña" />
                            <label htmlFor="password" className='form-label' >Password</label>
                            <ErrorMessage name="password" component='div'  className='form-msg' />
                        </div>
                        <div className='form-group py-3'>
                            <button type="submit" className='btn btn-primary btn-sm rounded-pill'>Enviar</button>
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
