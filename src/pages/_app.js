import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import Loader from '@/componants/Loader/Loader';
import GoToTopButton from '@/componants/GoToTopButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/fontawesome-pro.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/layouts/main/footer/footer.css';
import '@/layouts/main/nav/header.css';
import '@/componants/Marquee/marquee.css';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false); // Set initial state to true

    const getLayout = Component.getLayout || ((page) => page);

    useEffect(() => {
        // Add a listener to start loading when a route changes
        const handleRouteChangeStart = () => {
            setIsLoading(true);
        };

        // Add a listener to stop loading when a route changes
        const handleRouteChangeComplete = () => {
            setIsLoading(false);
        };

        // Attach the listeners to the router
        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        // Clean up the listeners when the component unmounts
        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, [router]);

    return (
        <>
            <style jsx global>{`
                :root {
                    --main-theme-color: #02BD67;
                }
            `}</style>
            {isLoading ? <Loader isLoading={isLoading} /> :
                <main data-scroll-container>
                    {getLayout(<Component {...pageProps} />)}
                </main>
            }

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <GoToTopButton />
        </>
    );
}

export default MyApp;
