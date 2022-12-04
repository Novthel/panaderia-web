import { db } from './Credentials';
import { getDoc, doc, setDoc, getDocs, collection, deleteDoc } from 'firebase/firestore';


export const newUser = (user, values)=> {
    
  try {
    const uid = user;
    const docRef = doc(db, `users/${uid}`);
    setDoc(docRef, values );
  } catch (error) {
    console.log(error)
  }
   
}


export const getUser = async (uid)=> {

    const docRef = doc(db, `users/${uid}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return  docSnap.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
}


export const getListUser = async ()=> {

  const querySnapshot = await getDocs(collection(db, "users"));
  const listUser = querySnapshot.docs.map( doc => {
    return { ...doc.data(), id: doc.id }
  });
 
  return listUser;
}


export const updateUser = async (data)=> {
    
  try {
      await setDoc( doc(db, "users", data.id), data);  
      alert('Usuario actualizado exitosamente');
  } catch (error) {
      console.error('Error. Fallo al actualizar el documento', error)
      alert('Error. Fallo al actualizar el documento')
  }
  
}


export const removeUser = async (id)=>{

    try {
      await deleteDoc(doc(db, "users", id));
      alert('Usuario eliminado exitosamente');
    } catch (error) {
        alert('Error. No se pudo eliminar el Usuario');
        console.error(error)
    }
}