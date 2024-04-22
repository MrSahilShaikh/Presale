import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Marquee from './Marquee';
import Slider from 'react-slick';
import Link from 'next/link';

const Community = () => {
    const commonSettings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 8,
        slidesToScroll: 1,
        variableWidth: true,
        pauseOnHover: false,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1399,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 1199,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 991,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const firstSliderSettings = { ...commonSettings };

    return (
        <>
            <section className='logos-area position-relative'>
            <div className="marque__area">
                <div className="w-100">
                    <div className="marque__inner logo-marquee p-relative">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="marque__wrapper">
                                    <Slider className='marque__slider' {...firstSliderSettings}>
                                        <div className="marque__item " key={'tickers'}>
                                            <Image src={'/img/client/SVG.png'} width={200} height={50} className='slider-logo img-fluid me-4' alt='ethereum' />
                                        </div>
                                        <div className="marque__item " key={'tickers'}>
                                            <Image src={'/img/client/SVG-1.png'} width={200} height={50} className='slider-logo img-fluid me-4' alt='ethereum' />
                                        </div>
                                        <div className="marque__item " key={'tickers'}>
                                            <Image src={'/img/client/SVG-2.png'} width={200} height={50} className='slider-logo img-fluid me-4' alt='ethereum' />
                                        </div>
                                        <div className="marque__item " key={'tickers'}>
                                            <Image src={'/img/client/SVG-3.png'} width={200} height={50} className='slider-logo img-fluid me-4' alt='ethereum' />
                                        </div>
                                        <div className="marque__item " key={'tickers'}>
                                            <Image src={'/img/client/SVG-4.png'} width={200} height={50} className='slider-logo img-fluid me-4' alt='ethereum' />
                                        </div>
                                        <div className="marque__item " key={'tickers'}>
                                            <Image src={'/img/client/SVG.png'} width={200} height={50} className='slider-logo img-fluid me-4' alt='ethereum' />
                                        </div>
                                        <div className="marque__item " key={'tickers'}>
                                            <Image src={'/img/client/SVG-1.png'} width={200} height={50} className='slider-logo img-fluid me-4' alt='ethereum' />
                                        </div>
                                        <div className="marque__item " key={'tickers'}>
                                            <Image src={'/img/client/SVG-2.png'} width={200} height={50} className='slider-logo img-fluid me-4' alt='ethereum' />
                                        </div>
                                        <div className="marque__item " key={'tickers'}>
                                            <Image src={'/img/client/SVG-3.png'} width={200} height={50} className='slider-logo img-fluid me-4' alt='ethereum' />
                                        </div>
                                        <div className="marque__item " key={'tickers'}>
                                            <Image src={'/img/client/SVG-4.png'} width={200} height={50} className='slider-logo img-fluid me-4' alt='ethereum' />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

           
            <section className='community-area position-relative'>
                <Container>
                    <Row className='text-center justify-content-center'>
                        <Col lg={8}>
                            <h2 className='section-heading mb-4'>Trending Communities</h2>
                        </Col>
                    </Row>
                </Container>
                <Marquee />
            </section>
        </>
    );
};

export default Community;
