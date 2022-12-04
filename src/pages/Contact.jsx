import FormContactEmail from '../components/container/form/FormContactEmail';
import Header from '../components/container/Header';
import Welcome from '../components/container/Welcome';
import Footer from '../components/pure/Footer';

const Contact = () => {
    return (
        <>
            <Header />
            <Welcome />
            <FormContactEmail />  
            <Footer />  
        </>
    );
}

export default Contact;