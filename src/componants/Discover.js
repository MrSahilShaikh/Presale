import React, { useState, useEffect } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import Image from 'next/image';
import CommunityCardTwo from './CommunityCardTwo';

SwiperCore.use([Pagination, Navigation]);

const Discover = () => {
    const [activeTab, setActiveTab] = useState('Launchpads');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const launchpadsData = [
        {
            name: 'Libera',
            image: '/img/card.png',
            authorImage: '/img/lix.png',
            totalRaised: '40.2M',
            totalProjects: 10,
            communityMembers: 1002
        },
        {
            name: 'Libera',
            image: '/img/card.png',
            authorImage: '/img/lix.png',
            totalRaised: '40.2M',
            totalProjects: 10,
            communityMembers: 1002
        },
        {
            name: 'Libera',
            image: '/img/card.png',
            authorImage: '/img/lix.png',
            totalRaised: '40.2M',
            totalProjects: 10,
            communityMembers: 1002
        },
        {
            name: 'Libera',
            image: '/img/card.png',
            authorImage: '/img/lix.png',
            totalRaised: '40.2M',
            totalProjects: 10,
            communityMembers: 1002
        },
        {
            name: 'Libera',
            image: '/img/card.png',
            authorImage: '/img/lix.png',
            totalRaised: '40.2M',
            totalProjects: 10,
            communityMembers: 1002
        },
        {
            name: 'Libera',
            image: '/img/card.png',
            authorImage: '/img/lix.png',
            totalRaised: '40.2M',
            totalProjects: 10,
            communityMembers: 1002
        },
    ];


    return (
        <section className='dicover-area position-relative'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='d-flex justify-content-between align-items-center mb-4'>
                            <h2 className='section-heading'>Discover New Communities</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Nav variant="tabs" defaultActiveKey={activeTab} className="tabs-buttons mb-4 mb-md-5">
                            <Nav.Item>
                                <Nav.Link eventKey="Launchpads" onClick={() => handleTabChange('Launchpads')}>Launchpads</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Community" onClick={() => handleTabChange('Community')}>Community VC</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Projects" onClick={() => handleTabChange('Projects')}>Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Influencers" onClick={() => handleTabChange('Influencers')}>Influencers</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="KOLs" onClick={() => handleTabChange('KOLs')}>KOLs</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <Row className='g-3 g-md-4 g-lg-5'>
                    {activeTab === 'Launchpads' && (
                        <>
                            {launchpadsData.map((community, index) => (
                                <Col className='col-md-4' key={index}>
                                    <CommunityCardTwo communityData={community} />
                                </Col>
                            ))}
                        </>
                    )}
                    {activeTab === 'Community' && (
                        <>
                            {launchpadsData.map((community, index) => (
                                <Col className='col-md-4' key={index}>
                                    <CommunityCardTwo communityData={community} />
                                </Col>
                            ))}

                        </>
                    )}
                    {activeTab === 'Projects' && (
                        <>
                            {launchpadsData.map((community, index) => (
                                <Col className='col-md-4' key={index}>
                                    <CommunityCardTwo communityData={community} />
                                </Col>
                            ))}

                        </>
                    )}
                    {activeTab === 'Influencers' && (
                        <>
                            {launchpadsData.map((community, index) => (
                                <Col className='col-md-4' key={index}>
                                    <CommunityCardTwo communityData={community} />
                                </Col>
                            ))}

                        </>
                    )}
                    {activeTab === 'KOLs' && (
                        <>
                            {launchpadsData.map((community, index) => (
                                <Col className='col-md-4' key={index}>
                                    <CommunityCardTwo communityData={community} />
                                </Col>
                            ))}

                        </>
                    )}
                    <Col xs={12}>
                        <div className='text-center'>
                            <Link href={'/communities'} className='button-outline'>View More</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default Discover;
