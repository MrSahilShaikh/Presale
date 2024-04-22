import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const Banner = () => {
    return (
        <section className='banner-area position-relative'>
            <Image src="/img/arrow.png" width={122} height={122} className='banner-arrrow' alt='arrow' />
            <div className='bottom-background'></div>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={6}>
                        <div className='banner-content'>
                            <h1>Discover Launchpad communities and invest</h1>
                            <p>Digital Launchpad Marketplace for IDOs, Private Sales, Seed and more. Invest, Raise, Trade.</p>
                            <div className='btn-group'>
                                <button className='button-primary me-md-3 mb-3 mb-md-0'>Explore</button>
                                <button className='button-outline'>Create</button>
                            </div>
                        </div>
                        <hr/>
                        <div className='counter-list d-flex flex-wrap justify-content-between justify-content-md-start'>
                            <div className='counter-box'>
                                <h3><CountUp end={10} />K+</h3>
                                <span>Communities</span>
                            </div>
                            <div className='counter-box'>
                                <h3><CountUp end={70} />k+</h3>
                                <span>Total Raised</span>
                            </div>
                            <div className='counter-box'>
                                <h3><CountUp end={5} />k+</h3>
                                <span>Projects</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={10} lg={6}>
                        <div className='card-wrapper'>
                        <Image src="/img/banner-bg-shape.png" width={854} height={712} className='banner-shape' alt='banner shape' />

                            <div className='img-card first-card' style={{width:'65%'}}>
                                <Image src={'/img/card-1.jpg'} alt='' className='card-image w-100 img-fluid' width={310} height={173} />
                                <div className='card-content'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center icon-title'>
                                            <Image src={'/img/ellipse.png'} className='me-2' width={40} height={40} alt='auther' />
                                            Xave
                                        </div>
                                        <div className='d-flex align-items-center like-btn'>
                                            <i className='fa fa-heart liked'></i>
                                            34
                                        </div>
                                    </div>
                                    <div className='points-list'>
                                        <div className='list'>
                                            <p>Total Raised</p>
                                            <p>$40.2M</p>
                                        </div>
                                        <div className='list'>
                                            <p>Total Projects</p>
                                            <p>10</p>
                                        </div>
                                        <div className='list'>
                                            <p>Amount in Community</p>
                                            <p>$40.2M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-card second-card'>
                                <Image src={'/img/card-2.jpg'} alt='' className='card-image w-100 img-fluid' width={310} height={173} />
                                <div className='card-content'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center icon-title'>
                                            <Image src={'/img/ellipse.png'} className='me-2' width={40} height={40} alt='auther' />
                                            Xave
                                        </div>
                                        <div className='d-flex align-items-center like-btn'>
                                            <i className='fa fa-heart liked'></i>
                                            34
                                        </div>
                                    </div>
                                    <div className='points-list'>
                                        <div className='list'>
                                            <p>Total Raised</p>
                                            <p>$40.2M</p>
                                        </div>
                                        <div className='list'>
                                            <p>Total Projects</p>
                                            <p>10</p>
                                        </div>
                                        <div className='list'>
                                            <p>Amount in Community</p>
                                            <p>$40.2M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
