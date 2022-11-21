import { v4 } from 'uuid';
import { storage, db } from './Credentials';
import { ref, uploadBytes, getDownloadURL, deleteObject }  from 'firebase/storage';
import { collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, query, where } from "firebase/firestore"; 


export const uploadFile = async (file) => {
    const storageRef = ref(storage, v4());
    await uploadBytes(storageRef, file)

    const url = await getDownloadURL(storageRef);
    return url
}


export const saveProduct = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "Products"), data);
        console.log(docRef);
        alert('Producto Guardado Correctamente');
    } catch (error) {
        console.error(error);
        alert('Error al guardar el Producto');
    }

}

export const getListProducts = async ()=> {

    const querySnapshot = await getDocs(collection(db, "Products"));
    const listProduct = querySnapshot.docs.map( doc => {
      return { ...doc.data(), id: doc.id }
    });
   
    return listProduct;
  
}


export const getProduct = async (id)=> {

    const docRef = doc(db, "Products", id);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){   
        const docProd = { ...docSnap.data(), id:docSnap.id }
        return docProd;
    }else {
        console.error('Producto No encontrado')
        alert('Producto No encontrado')
    }
}


export const getColectionProduct = async (category)=> {

    const q = query(collection(db, "Products"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const listProduct = querySnapshot.docs.map( doc => {
        return { ...doc.data(), id: doc.id }
      });
     
      return listProduct;
}


export const updateProduct = async (data)=> {
    
    try {
        await setDoc( doc(db, "Products", data.id), data);  
        alert('Producto actualizado exitosamente');
    } catch (error) {
        console.error('Error. Fallo al actualizar el documento', error)
        alert('Erro. Fallo al actualizar el documento')
    }
    
}


export const removeProduct = async (id)=> {
    try {
        await deleteDoc(doc(db, "Products", id));
        alert('Producto borrado exitosamente');
    } catch (error) {
        alert('Error. No se pudo eliminar el Producto');
        console.error(error)
    }
}

export const removeArchive = async (id) => {

    const archiveRef = ref(storage, id);
    deleteObject(archiveRef)
    .then(()=> {
        console.log('archivo borrado exitosamente')
    }).catch((error) => {
        console.error(error)
    })
}

