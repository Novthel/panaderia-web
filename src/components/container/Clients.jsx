import React, { useState, useEffect } from 'react';
import { getListUser } from '../../firebase/userController';

const Clients = () => {

    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        getListUser()
            .then(list => setListUser(list))    
            .catch(e => console.error(e))
    }, []);

    return (
        <div className='clients'>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">APELLIDOS</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">DIRECCION</th>
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
                                </tr>
                        ))
                    }
                   
                </tbody>
            </table>
            
        </div>
    );
}

export default Clients;
