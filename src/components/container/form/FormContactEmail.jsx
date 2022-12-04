import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';


const FormContactEmail = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm();

    const sendEmail = (data, e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_w7c3y8g', 'template_qa8xl2v', e.target,'rnFBGZ2Xa3aii-Ucw')
        .then((result) => {
            const state = result.text;
            if(state === 'OK') {
                alert('Mensaje enviado Exitosamente')
            }
            e.target.reset()
        }, (error) => {
            console.log(error.text);
            alert('No se pudo enviar mensaje. Reintente nuevamente')
        });
    }

    return (
        <section className="sec-contact" id="contact">
            <div className="sec-title">
                <h3>CONTACTENOS</h3>
            </div>
            <div className="container">
                <form id="form-contact" onSubmit={ handleSubmit(sendEmail) }>
                    <div className="data-input">
                        <label htmlFor="nameContact">
                            <span>Nombre</span>
                            <input type="text" name="nameContact" { ...register('nameContact', { required: true})} />
                            { errors.nameContact?.type === 'required' && <p className='text-danger small'>*name is required</p>  }
                        </label>
                        <label htmlFor="emailContact">
                            <span>Correo</span>
                            <input type="email" name="emailContact" { ...register('emailContact', 
                            { 
                                required:true,
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                                
                                })
                            } />
                                { errors.emailContact?.type === 'required' && <p className='text-danger small'>*email is required</p> }
                                { errors.emailContact?.type === 'pattern' && <p className='text-danger small'>*invalid mail format</p> }
                        </label>
                    </div>
                    <label htmlFor="messageContact">
                        <span className="d-flex flex-start">Mensaje</span>
                        <textarea type="text" name="messageContact" { ...register('messageContact', { required: true})} ></textarea>
                        { errors.messageContact?.type === 'required' && <p className='text-danger small'>*message is required</p>  }
                    </label>
                    <div className="btn-form">
                        <button type="submit" className="btn-base disabled" id="btn-send">Enviar  <i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                    
                </form>

            </div>
     
        </section>
    );
}

export default FormContactEmail;
