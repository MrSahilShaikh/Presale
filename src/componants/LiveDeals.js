import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import Image from 'next/image';
import LiveDealCard from './LiveDealCard';

SwiperCore.use([Pagination, Navigation]);
const liveDealsData = [
    {
        imageSrc: '/img/card1.png',
        tags: [
            { label: 'IDO', color: 'blue' },
            { label: 'Refundable', color: 'green' },
            { label: 'KYC', color: 'yellow' }
        ],
        author: { username: 'Libera', avatar: '/img/lix.png' },
        likedCount: 34,
        title: 'Dirac Finance',
        pair: 'DIRAC / USDT',
        content: 'Dirac Finance is a DeFi protocol enabling any LP...',
        progress: { label: 'Current Crowdsale Period', percentage: '0%' },
        raiseAmount: '$40.2M',
        contributeChain: { name: 'BNB', icon: '/img/BNB.png' },
        distributeChain: { name: 'POLYGON', icon: '/img/POLYGON.png' },
        isLive: true,
        dealEndsIn: '8d 16h 49m 48s',
        startIn: 0,
    },
    {
        imageSrc: '/img/card1.png',
        tags: [
            { label: 'IDO', color: 'blue' },
            { label: 'Refundable', color: 'green' },
            { label: 'KYC', color: 'yellow' }
        ],
        author: { username: 'Libera', avatar: '/img/lix.png' },
        likedCount: 34,
        title: 'Dirac Finance',
        pair: 'DIRAC / USDT',
        content: 'Dirac Finance is a DeFi protocol enabling any LP...',
        progress: { label: 'Current Crowdsale Period', percentage: '23.76%' },
        raiseAmount: '$40.2M',
        contributeChain: { name: 'BNB', icon: '/img/BNB.png' },
        distributeChain: { name: 'POLYGON', icon: '/img/POLYGON.png' },
        isLive: true,
        dealEndsIn: '8d 16h 49m 48s',
        startIn: 1,
    },
    {
        imageSrc: '/img/card1.png',
        tags: [
            { label: 'IDO', color: 'blue' },
            { label: 'Refundable', color: 'green' },
            { label: 'KYC', color: 'yellow' }
        ],
        author: { username: 'Libera', avatar: '/img/lix.png' },
        likedCount: 34,
        title: 'Dirac Finance',
        pair: 'DIRAC / USDT',
        content: 'Dirac Finance is a DeFi protocol enabling any LP...',
        progress: { label: 'Current Crowdsale Period', percentage: '100%' },
        raiseAmount: '$40.2M',
        contributeChain: { name: 'BNB', icon: '/img/BNB.png' },
        distributeChain: { name: 'POLYGON', icon: '/img/POLYGON.png' },
        isLive: true,
        dealEndsIn: '',
        startIn: 2,

    },
    {
        imageSrc: '/img/card1.png',
        tags: [
            { label: 'IDO', color: 'blue' },
            { label: 'Refundable', color: 'green' },
            { label: 'KYC', color: 'yellow' }
        ],
        author: { username: 'Libera', avatar: '/img/lix.png' },
        likedCount: 34,
        title: 'Dirac Finance',
        pair: 'DIRAC / USDT',
        content: 'Dirac Finance is a DeFi protocol enabling any LP...',
        progress: { label: 'Current Crowdsale Period', percentage: '23.76%' },
        raiseAmount: '$40.2M',
        contributeChain: { name: 'BNB', icon: '/img/BNB.png' },
        distributeChain: { name: 'POLYGON', icon: '/img/POLYGON.png' },
        isLive: true,
        dealEndsIn: '8d 16h 49m 48s',
        startIn: 1,
    },
    {
        imageSrc: '/img/card1.png',
        tags: [
            { label: 'IDO', color: 'blue' },
            { label: 'Refundable', color: 'green' },
            { label: 'KYC', color: 'yellow' }
        ],
        author: { username: 'Libera', avatar: '/img/lix.png' },
        likedCount: 34,
        title: 'Dirac Finance',
        pair: 'DIRAC / USDT',
        content: 'Dirac Finance is a DeFi protocol enabling any LP...',
        progress: { label: 'Current Crowdsale Period', percentage: '23.76%' },
        raiseAmount: '$40.2M',
        contributeChain: { name: 'BNB', icon: '/img/BNB.png' },
        distributeChain: { name: 'POLYGON', icon: '/img/POLYGON.png' },
        isLive: true,
        dealEndsIn: '8d 16h 49m 48s',
        startIn: 1,
    },
];
const LiveDeals = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(1);

    useEffect(() => {
        const handleSlideChange = () => {
            if (swiperRef) {
                setCurrentIndex(swiperRef.realIndex + 1);
            }
        };

        if (swiperRef) {
            swiperRef.on('slideChange', handleSlideChange);
        }

        return () => {
            if (swiperRef) {
                swiperRef.off('slideChange', handleSlideChange);
            }
        };
    }, [swiperRef]);

    const goToPrevSlide = () => {
        if (swiperRef) {
            swiperRef.slidePrev();
        }
    };

    const goToNextSlide = () => {
        if (swiperRef) {
            swiperRef.slideNext();
        }
    };

    return (
        <section className='livedeal-area position-relative'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2 className='section-heading'>Live Deals</h2>
                            <Link href={'/live-deals'} className="viewall-link"><span>See All</span> <i className="fa-regular fa-chevron-right"></i></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='slider-spacing'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3.4}
                    centeredSlides={false} // Set this to false
                    spaceBetween={24}
                    navigation={{
                        prevEl: '.el-prev',
                        nextEl: '.el-next'
                    }}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1, // Display 2 slides on tablets
                        },
                       
                        768: {
                            slidesPerView: 1.8, // Display 2 slides on tablets
                        },
                        1024: {
                            slidesPerView: 2.5, // Display 1 slide on mobile devices
                        },
                        1400: {
                            slidesPerView: 3.4, // Display 1 slide on mobile devices
                        }
                    }}
                >
                    {liveDealsData && liveDealsData.map((deal, index) => (
                        <SwiperSlide key={index}>
                            <LiveDealCard {...deal} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Container>
                <div className='position-relative mb-4'>
                    <div className='el-swiper-pagination'>
                        <div className="pagination-left">0{currentIndex}</div>
                        <div className='progress-container'>
                            <div className='progress-bar' style={{ width: `${(currentIndex / (swiperRef?.slides?.length)) * 100}%` }}></div>
                        </div>
                        <div className="pagination-right">0{swiperRef?.slides?.length}</div>
                    </div>
                    <div className='button-nav'>
                        <button className='el-prev' onClick={goToPrevSlide}><i className="fa-regular fa-chevron-left"></i></button>
                        <button className='el-next' onClick={goToNextSlide}><i className="fa-regular fa-chevron-right"></i></button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default LiveDeals;
