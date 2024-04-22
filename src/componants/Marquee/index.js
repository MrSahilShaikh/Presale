import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

export default function Marquee() {

    const commonSettings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        initialSlide: 1,
        pauseOnHover: false,
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
    const secondSliderSettings = { ...commonSettings, rtl: true };

    return (
        <div className="marque__area">
            <div className="w-100">
                <div className="marque__inner p-relative">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="marque__wrapper">
                                <Slider className='marque__slider' {...firstSliderSettings}>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/1.png'} width={40} height={40} alt='Digital Resting Point' />
                                            <p>Digital Resting Point</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/2.png'} width={40} height={40} alt='Blue Collection' />
                                            <p>Blue Collection</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/3.png'} width={40} height={40} alt='Blue Collection' />
                                            <p>NFTubers</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/4.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Magazine Cover</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/5.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Mecha Maids</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/6.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Cyborg Girl</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/7.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Inner Space Friends</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/8.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Flow In Cosmos</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/9.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>NU-VACUUM</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/10.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>One Day One Flower</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/1.png'} width={40} height={40} alt='Digital Resting Point' />
                                            <p>Digital Resting Point</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/2.png'} width={40} height={40} alt='Blue Collection' />
                                            <p>Blue Collection</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/3.png'} width={40} height={40} alt='Blue Collection' />
                                            <p>NFTubers</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/4.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Magazine Cover</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/5.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Mecha Maids</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/6.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Cyborg Girl</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/7.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Inner Space Friends</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/8.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Flow In Cosmos</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/9.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>NU-VACUUM</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/10.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>One Day One Flower</p>
                                        </Link>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="marque__inner p-relative">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="marque__wrapper">
                                <Slider className='marque__slider' {...secondSliderSettings}>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/1.png'} width={40} height={40} alt='Digital Resting Point' />
                                            <p>Digital Resting Point</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/2.png'} width={40} height={40} alt='Blue Collection' />
                                            <p>Blue Collection</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/3.png'} width={40} height={40} alt='Blue Collection' />
                                            <p>NFTubers</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/4.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Magazine Cover</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/5.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Mecha Maids</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/6.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Cyborg Girl</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/7.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Inner Space Friends</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/8.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Flow In Cosmos</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/9.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>NU-VACUUM</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/10.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>One Day One Flower</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/1.png'} width={40} height={40} alt='Digital Resting Point' />
                                            <p>Digital Resting Point</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/2.png'} width={40} height={40} alt='Blue Collection' />
                                            <p>Blue Collection</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/3.png'} width={40} height={40} alt='Blue Collection' />
                                            <p>NFTubers</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/4.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Magazine Cover</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/5.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Mecha Maids</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/6.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Cyborg Girl</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/7.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Inner Space Friends</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/8.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>Flow In Cosmos</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/9.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>NU-VACUUM</p>
                                        </Link>
                                    </div>
                                    <div className="marque__item " key={'tickers'}>
                                        <Link href="/community-details" className='ticker-card'>
                                            <Image src={'/img/slider/10.png'} width={40} height={40} alt='LE FLOAT' />
                                            <p>One Day One Flower</p>
                                        </Link>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='d-flex justify-content-center'>
                    <Link href={'/communities'} className='button-primary sm-x mt-4'>All Communities<i className="ms-3 fa-solid fa-arrow-up-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}