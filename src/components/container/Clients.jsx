import React, { useState, useEffect } from 'react';
import { getListUser, removeUser } from '../../firebase/UserController';

const Clients = ({ editUser }) => {

    const [listUser, setListUser] = useState([]);
    const [ change, setChange ] = useState(false);

    const deleteUser = async (id)=> {
        if(window.confirm("Seguro que quiere borrar este Usuario?")){
            await removeUser(id)   
            setChange(!change) 
        }  
        
    }

    useEffect(() => {
        getListUser()
            .then(list => setListUser(list))    
            .catch(e => console.error(e))
    }, [change]);

    return (
        <div className='clients table-responsive'>
            <table className="table table-striped table-hover table-bordered table-sm">
                <thead>
                    <tr>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">APELLIDOS</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">DIRECCION</th>
                        <th scope="col">ROL</th>
                        <th scope="col">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUser.map((user)=> (

                                <tr key={ user.id }>
                                    <td>{ user.name } </td>
                                    <td>{ user.lastname }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.direction }</td>
                                    <td>{ user.rol }</td>
                                    <td>
                                        <button type="button" className="btn btn-danger btn-sm m-1" onClick={ ()=> deleteUser(user.id) } >DELETE <i className="bi bi-trash3-fill"></i></button>
                                        <button type="button" className="btn btn-primary btn-sm m-1"  onClick={ ()=> editUser(user.id) } >UPDATE <i className="bi bi-chevron-right"></i></button>
                                    </td>
                                </tr>
                        ))
                    }
                   
                </tbody>
            </table>
            
        </div>
    );
}

export default Clients;
