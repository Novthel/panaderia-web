import { db } from './Credentials';
import { getDoc, doc, setDoc, getDocs, collection } from 'firebase/firestore';


export const newUser = (user, values)=> {
    
    const uid = user;
    const docRef = doc(db, `users/${uid}`);
    setDoc(docRef, values );
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