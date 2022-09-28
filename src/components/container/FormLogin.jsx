import React from 'react'
import { Formik , Form , Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'


const loginSchema = Yup.object().shape(

    {
        email: Yup.string()
                .email('<i> Invalid email format')
                .required('<i> email is required.'),
        password: Yup.string()
                .required('<i> Password is required.')
    }
)



export default function LoginFormik() {

    const initialCredentials = {
            email:'',
            password:''
        }

    return (
        <div className='container-form'>
            <legend>Login</legend>
            <Formik 
                initialValues = { initialCredentials }
                validationSchema = { loginSchema }

                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
                >

                {({ isSubmitting }) => (
                    <Form>
                        <div className='form-group'>   
                            <Field id="email" className='form-field' type="email" name="email" placeholder="introduzca email" />
                            <label  className='form-label' htmlFor="email">Email</label>
                            <ErrorMessage name="email" component='div'  className='form-msg' />
                        </div>
                        <div className='form-group'>
                            <Field id="password" className='form-field' type="password" name="password" placeholder="Password" />
                            <label htmlFor="password" className='form-label' >Password</label>
                            <ErrorMessage name="password" component='div'  className='form-msg' />
                        </div>
                        <div className='form-group py-3'>
                            <button type="submit" className='btn btn-primary btn-sm rounded-pill'>Submit</button>
                            { isSubmitting ? (<p>Login your credentials ...</p>) : null }
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
