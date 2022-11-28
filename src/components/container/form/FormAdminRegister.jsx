import React, { useState, useEffect } from 'react';
import { getUser, newUser, updateUser } from '../../../firebase/UserController';
import { auth } from '../../../firebase/Credentials';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const FormAdminRegister = ({ id, mode }) => {

    const [ name, setName ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ direction, setDirection ] = useState('');
    const [ rol, setRol ] = useState('user')


    const data = {
      name,
      lastname,
      email,
      password,
      direction,
      rol
  }

    const handleSubmit = (e)=> {
      e.preventDefault()

      if(id !== null ) {
        
            updateUser({
                ...data, id
            });
            mode('list') 
      }else {

            const { email, password, name } = data;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => { 
                    const user = userCredential.user.uid;
                    alert(`Usuario ${name} ha sido registrado exitosamente.`);
                    newUser(user, data)
                    mode('list')
                })
                .catch((error) => {
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
                });
      }
    }


    useEffect(() => {

        if(id !== null){
            getUser(id)
              .then((user)=> {
                setName(user.name);
                setLastname(user.lastname);
                setEmail(user.email);
                setPassword(user.password);
                setDirection(user.direction);
                setRol(user.rol)
              })
        }
      }, [id])

    return (
            <div className='container-form-product'>
                <form className='form-product'  id="formProduct" onSubmit={ handleSubmit }>
                    <legend>{ id ? 'Editar Registro' : 'Registrar Usuario' } </legend>

                    <label htmlFor="name"><span>Nombres</span></label>  
                    <input type="text" name="name" className='form-control' id="name" value={ name } onChange={ e => setName(e.target.value)} required/>
                    
                    <label htmlFor="lastname"><span>Apellidos</span></label>
                    <input type="text" name="lastname" id="price" className='form-control' value={ lastname }  onChange={ e => setLastname(e.target.value) } required/>
                    
                    <label htmlFor="email"><span>Email</span></label>
                    <input type="text" className='form-control' name="email" id="email" value= { email } onChange={ e => setEmail(e.target.value) } required/>
                    
                    <label htmlFor="direction"><span className="d-flex flex-start">Direccion</span> </label>  
                    <input type="text" name="direction" className='form-control' id="direction" value= { direction }  onChange={ e => setDirection(e.target.value)} required/>
                    
                    {
                        id?
                        null
                        :
                        (
                          <>
                            <label htmlFor="password"><span>Password</span></label>
                            <input type="text" className='form-control' name="password" id="password" value= { password } onChange={ e => setPassword(e.target.value) } required/>
                          </>
                        )
                    }
                    <label htmlFor="Rol"><span>Rol</span></label>
                    <select className='form-select mb-2' id='select' name='Rol' onChange={ (e)=> setRol(e.target.value)} >
                          <option selected>{ rol }</option>
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
