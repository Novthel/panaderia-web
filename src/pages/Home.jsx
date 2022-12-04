import FormContactEmail from '../components/container/form/FormContactEmail';
import Header from '../components/container/Header';
import Principal from '../components/container/principal';
import Welcome from '../components/container/Welcome';
import Footer from '../components/pure/Footer';

const Home = () => {
    return (
             <>
                <Header />  
                <Welcome />
                <Principal />
                <FormContactEmail />
                <Footer />
            </>
    );
}

export default Home;
