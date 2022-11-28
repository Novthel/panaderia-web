import React from 'react';

const FormContact = () => {
    return (
        <section className="sec-contact" id="contact">
            <div className="sec-title">
                <h3>CONTACTO</h3>
            </div>
            <div className="container">
                <form action="" id="formulario">
                    <div className="data-input">
                        <label htmlFor="name">
                            <span>Nombre</span>
                            <input type="text" name="nombre" id="nombre"/>
                        </label>
                        <label htmlFor="email">
                            <span>Email</span>
                            <input type="email" name="email" id="email"/>
                        </label>
                    </div>
                    <label htmlFor="mensaje">
                        <span className="d-flex flex-start">Mensaje</span>
                        <textarea type="text" name="mensaje" id="mensaje"></textarea>
                    </label>
                    <div id="msj"></div>
                    <div className="btn-form">
                        <button type="submit" className="btn-base disabled" id="btn-enviar">Enviar  <i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                    
                </form>

            </div>
     
        </section>
    );
}

export default FormContact;
