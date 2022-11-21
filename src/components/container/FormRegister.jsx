import React from 'react';
import { Formik , Form , Field , ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { auth } from '../../firebase/Credentials';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import { newUser } from '../../firebase/UserController';



const registerSchema = Yup.object().shape(

    {
        name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('<i> name is required.'),
        lastname: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('<i> lastname is required.'),
        email: Yup.string()
                .email('<i> Invalid email format')
                .required('<i> email is required.'),
        password: Yup.string()
                .required('<i> Password is required.')
    }
)


/**
 * 
 * @returns The registration form
 */
 
const FormRegister = () => {

    const navigate = useNavigate();
   
    const initialCredentials = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        direction: ''
    }


    const createUser = (values)=> {
       
        const { email, password, name } = values;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { 
                const user = userCredential.user.uid;
                toast(`Usuario ${name} ha sido registrado exitosamente.`);
                navigate('/login');

                newUser(user, values)
            })
            .catch((error) => {
                toast('Error de registro. por favor intente nuevamente')
        });
    }


    return (
        <>
            <div className='container-form'>
                <legend>Registro</legend>
                <Formik 
                    initialValues = { initialCredentials }
                    validationSchema = { registerSchema }
                    onSubmit= { values => createUser(values)}>

                    {({ isSubmitting }) => (
                        <Form>
                            <div className='form-group'>  
                                <Field id="name" className='form-field' type="text" name="name" placeholder="Nombres" />
                                <ErrorMessage name="name" component='div'  className='form-msg' />
                            </div>
                            <div className='form-group'>   
                                <Field id="lastname" className='form-field' type="text" name="lastname" placeholder="Apellidos" />
                                <ErrorMessage name="lastname" component='div'  className='form-msg' />
                            </div>
                            <div className='form-group'>   
                                <Field id="direction" className='form-field' type="text" name="direction" placeholder="Lugar de Residencia" />
                                <ErrorMessage name="direction" component='div'  className='form-msg' />
                            </div>
                            <div className='form-group'>   
                                <Field id="email" className='form-field' type="email" name="email" placeholder="Correo" />
                                <ErrorMessage name="email" component='div'  className='form-msg' />
                            </div>
                           
                            <div className='form-group'>
                                <Field id="password" className='form-field' type="password" autoComplete="current-password" name="password" placeholder="Contraseña" />
                                <ErrorMessage name="password" component='div'  className='form-msg' />
                            </div> 
                            
                            <div className='form-group py-3'>
                                <div className='btn-register'>
                                    <button type="submit" className='boton'>Guardar</button>
                                </div>
                            </div>
                            
                            <div className='text-msg'>
                                <p className='text-p'>¿Ya eres miembro?</p>
                                <Link to='/login' className='link-msg'>Inicia tu sesion</Link>
                            </div>  
                        </Form>
                    )} 
                </Formik>    
            </div> 
        </>
    )
}

export default FormRegister;
