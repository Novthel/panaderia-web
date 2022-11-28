import React, { useState, useEffect } from 'react';
import { getProduct, saveProduct, uploadFile, updateProduct } from '../../../firebase/ProductsController';


const FormProduct = ({ id, mode }) => {

    const [ nameProduct, setNameProduct ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ btnSend, setBtnSend ] = useState(false);
    const [ file, setFile ] = useState(null);
    const [ url, setUrl ] = useState(null);


    const upLoad = async (e)=> {
        e.preventDefault()

            try {
            
                const URL = await uploadFile(file);
                alert('Carga Exitosa')
                setUrl(URL)
                setBtnSend(false)
            } catch (error) {
                console.error(error);
                alert('Error al cargar el archivo')
                setBtnSend(false)
            }  
    }

    
    const handleChange = (archive)=> {
        setFile(archive)
        setBtnSend(true)
    }

    const data = {
        nameProduct,
        price,
        category,
        description,
        url
    }

    const addProduct = (e)=> {
        e.preventDefault();

        if(id !== null ) {
            if(url !== null) {
                updateProduct({
                    ...data, id
                });
                mode('list') 
            }else {
                alert('Debe adjuntar un archivo');
            }
        }else {
            if(url !== null) {
                saveProduct(data);
                resetForm()
            }else {
                alert('Debe adjuntar un archivo');
            }
        }
    }

    const resetForm = ()=> {

        setCategory('');
        setDescription('');
        setNameProduct('');
        setPrice('');
        setFile(null);
        setUrl(null);
        setBtnSend(false)

    }


    useEffect(() => {

      if(id !== null){
        getProduct(id)
            .then((prod)=> {
                setCategory(prod.category);
                setDescription(prod.description);
                setNameProduct(prod.nameProduct);
                setPrice(prod.price);
                setUrl(prod.url);
            })
      }
    }, [id])
    

    return (
            <div className='container-form-product'>
                <form className='form-product' onSubmit={ addProduct } id="formProduct">
                    <legend>{ id ? 'Edit Product' : 'New Product' } </legend>

                    <label htmlFor="nameProduct"><span>Product</span></label>  
                    <input type="text" name="nameProduct" className='form-control' id="nameProduct" value={ nameProduct } onChange={ e => setNameProduct(e.target.value)} required/>
                    
                    <input type='file' onChange={ (e) => handleChange(e.target.files[0]) }/>
                    <div  className='containerBtn-form'>
                        <button type='submit' onClick={(e) => upLoad(e) } className={ btnSend ? `btn btn-primary btn-sm col-4` : `btn btn-primary btn-sm col-4 disabled` } > <span>Upload <i className="bi bi-arrow-bar-up"></i></span></button> 
                    </div>
                    
                    <label htmlFor="price"><span>Price</span>  </label>
                    <input type="text" name="price" id="price" className='form-control' value={ price }  onChange={ e => setPrice(e.target.value) } required/>
                    
                    <label htmlFor="category"><span>Category</span></label>
                    <input type="text" className='form-control' name="category" id="category" value= { category } onChange={ e => setCategory(e.target.value) } required/>      
                
                    <label htmlFor="description">
                        <span className="d-flex flex-start">Description</span>
                        <textarea type="text" name="description" className='form-control' id="description" value= { description}  onChange={ e => setDescription(e.target.value)} required></textarea>
                    </label>
                    <div className='containerBtn-form'>
                        <button  type="submit" className='btn btn-primary btn-sm col-4' id="btn-enviar">{ id ? 'UPDATE' : 'SAVE' }</button>
                    </div>  
                </form>
            </div>
    )
}


export default FormProduct;