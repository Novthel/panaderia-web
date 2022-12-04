import React, { useState, useEffect, useContext } from 'react';
import { getUser, newUser, updateUser } from '../../../firebase/userController';
import { AppContext } from '../../../auth/UserProvider';
import { useForm } from 'react-hook-form';



const FormAdminRegister = ({ id, mode }) => {

  const { registerUser } = useContext(AppContext);
  const [ userData, setUserData ] = useState(null);
  const { register, handleSubmit, reset, formState: { errors }} = useForm({});


  const onSubmit = async (data)=> {

    if(id !== null ) {
          await updateUser({
              ...data
          });
          mode('list') 
    }else {

        const { email, password, name } = data;

        try {
          const userCredential = await registerUser(email, password);
          const user = userCredential.user.uid;
          alert(`Usuario ${name} ha sido registrado exitosamente.`);
          await newUser(user, data)
          
          mode('list')

        } catch (error) {
          console.log(error.code)
          switch (error.code) {
              case "auth/email-already-in-use":
                  alert("Usuario ya registrado");
                  break;
              case "auth/invalid-email":
                  alert("Formato email no válido");
                  break;
              
              default:
                  alert("Error, intentelo más tarde");
          }
        }    
    }
  }
  

  
 
  useEffect(() => {

      if(id !== null){
          getUser(id)
            .then((user)=> {
              setUserData({
                ...user, id
              })
            })
      }
    }, [id]);


    useEffect(() => {
      reset(userData)
     
    }, [reset, userData]);
    

  return (
          <div className='container-form-product'>
              <form className='form-product'  id="formProduct" onSubmit={ handleSubmit(onSubmit) }>
                  <legend>{ id ? 'Editar Registro' : 'Registrar Usuario' } </legend>

                  <label htmlFor="name"><span>Nombres</span></label>  
                  <input type="text" name='name' className='form-control' {...register('name',{ required:true, maxLength:20 }) } />
                  { errors.name?.type === 'required' && <p className='text-danger small'>*name is required</p> }
                  { errors.name?.type === 'maxLength' && <p className='text-danger small'>*name field must be 20 characters or less</p> }
                  
                  <label htmlFor="lastname"><span>Apellidos</span></label>
                  <input type="text" name='lastname' className='form-control' {...register('lastname',{ required:true, maxLength:50 }) } />
                  { errors.lastname?.type === 'required' && <p className='text-danger small'>*lastname is required</p> }
                  { errors.lastname?.type === 'maxLength' && <p className='text-danger small'>*name field must be 50 characters or less</p> }
                  
                  <label htmlFor="email"><span>Email</span></label>
                  <input type="text" name='email' className='form-control' {...register("email", 
                  { 
                      required:true,
                      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                  })
                  } />
                  { errors.email?.type === 'required' && <p className='text-danger small'>*email is required</p> }
                  { errors.email?.type === 'pattern' && <p className='text-danger small'>*invalid mail format</p> }

                  <label htmlFor="direction"><span className="d-flex flex-start">Direccion</span> </label>  
                  <input type="text" name='direction' className='form-control' {...register('direction',{ required:true }) } />
                  { errors.direction?.type === 'required' && <p className='text-danger small'>*direction is required</p> }
                  {
                      id?
                      null
                      :
                      (
                        <>
                          <label htmlFor="password"><span>Password</span></label>
                          <input type="password" name='password' className='form-control'  {...register('password',{ required:true }) }/>
                          { errors.password?.type === 'required' && <p className='text-danger small'>*Password is required</p> }
                        </>
                      )
                  }
                  <label htmlFor="Rol"><span>Rol</span></label>
                  <select className='form-select mb-2' {...register('rol')} >
                        <option value="user">User</option>
                        <option value="Admin">Admin</option>
                        <option value="SuperAdmin">SuperAdmin</option>
                  </select>

                  <div className='containerBtn-form'>
                      <button  type="submit" className='btn btn-primary btn-sm col-4' id="btn-enviar">{ id ? 'UPDATE' : 'SAVE' }</button>
                  </div>  
              </form>
          </div>
  );
}

export default FormAdminRegister;
