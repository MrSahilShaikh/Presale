import { useRouter } from 'next/router';
import Footer from '../footer/Footer';
import Header from './Header';
import Favicons from './Favicons';

const MainLayout = ({ children,isonlyTop}) => {
    const router = useRouter();
    
    return (
        <>
            <Favicons />
            <Header />
            {children}
            <Footer />
        </>
    );
};


export default MainLayout;