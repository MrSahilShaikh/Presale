import React, { useState, useEffect } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import Image from 'next/image';
import CommunityCard from './CommunityCard';

SwiperCore.use([Pagination, Navigation]);

const TopCommunities = () => {
    const [activeTab, setActiveTab] = useState('1day');
    const [communitiesData, setCommunitiesData] = useState(
        [
            {
                id: 1,
                username: 'Libera',
                avatarSrc: '/img/lix.png',
                description: 'Libera is the DEX for RWA and on-chain FX, working...',
                likes: 34,
                totalRaise: '10',
                contributeChain: '$40.2M',
                distributeChain: '1002',
                tags: [
                    { label: 'Launchpad / IDO', color: 'blue' },
                    { label: 'Refused Policy', color: 'green' },
                    { label: 'KOL/ Influencer', color: 'yellow' },
                    { label: 'Private & Seed Rounds', color: 'red' },
                ],
            },
            {
                id: 2,
                username: 'Liberas',
                avatarSrc: '/img/lix.png',
                description: 'Libera is the DEX for RWA and on-chain FX, working...',
                likes: 34,
                totalRaise: '10',
                contributeChain: '$40.2M',
                distributeChain: '1002',
                tags: [
                    { label: 'Launchpad / IDO', color: 'blue' },
                    { label: 'Refused Policy', color: 'green' },
                    { label: 'KOL/ Influencer', color: 'yellow' },
                    { label: 'Private & Seed Rounds', color: 'red' },
                ],
            },
            {
                id: 3,
                username: 'Liberas',
                avatarSrc: '/img/lix.png',
                description: 'Libera is the DEX for RWA and on-chain FX, working...',
                likes: 34,
                totalRaise: '10',
                contributeChain: '$40.2M',
                distributeChain: '1002',
                tags: [
                    { label: 'Launchpad / IDO', color: 'blue' },
                    { label: 'Refused Policy', color: 'green' },
                    { label: 'KOL/ Influencer', color: 'yellow' },
                    { label: 'Private & Seed Rounds', color: 'red' },
                ],
            },
            {
                id: 4,
                username: 'Liberas',
                avatarSrc: '/img/lix.png',
                description: 'Libera is the DEX for RWA and on-chain FX, working...',
                likes: 34,
                totalRaise: '10',
                contributeChain: '$40.2M',
                distributeChain: '1002',
                tags: [
                    { label: 'Launchpad / IDO', color: 'blue' },
                    { label: 'Refused Policy', color: 'green' },
                    { label: 'KOL/ Influencer', color: 'yellow' },
                    { label: 'Private & Seed Rounds', color: 'red' },
                ],
            },
            {
                id: 5,
                username: 'Libera',
                avatarSrc: '/img/lix.png',
                description: 'Libera is the DEX for RWA and on-chain FX, working...',
                likes: 34,
                totalRaise: '10',
                contributeChain: '$40.2M',
                distributeChain: '1002',
                tags: [
                    { label: 'Launchpad / IDO', color: 'blue' },
                    { label: 'Refused Policy', color: 'green' },
                    { label: 'KOL/ Influencer', color: 'yellow' },
                    { label: 'Private & Seed Rounds', color: 'red' },
                ],
            },
            {
                id: 6,
                username: 'Liberas',
                avatarSrc: '/img/lix.png',
                description: 'Libera is the DEX for RWA and on-chain FX, working...',
                likes: 34,
                totalRaise: '10',
                contributeChain: '$40.2M',
                distributeChain: '1002',
                tags: [
                    { label: 'Launchpad / IDO', color: 'blue' },
                    { label: 'Refused Policy', color: 'green' },
                    { label: 'KOL/ Influencer', color: 'yellow' },
                    { label: 'Private & Seed Rounds', color: 'red' },
                ],
            },
            {
                id: 7,
                username: 'Liberas',
                avatarSrc: '/img/lix.png',
                description: 'Libera is the DEX for RWA and on-chain FX, working...',
                likes: 34,
                totalRaise: '10',
                contributeChain: '$40.2M',
                distributeChain: '1002',
                tags: [
                    { label: 'Launchpad / IDO', color: 'blue' },
                    { label: 'Refused Policy', color: 'green' },
                    { label: 'KOL/ Influencer', color: 'yellow' },
                    { label: 'Private & Seed Rounds', color: 'red' },
                ],
            },
            {
                id: 8,
                username: 'Liberas',
                avatarSrc: '/img/lix.png',
                description: 'Libera is the DEX for RWA and on-chain FX, working...',
                likes: 34,
                totalRaise: '10',
                contributeChain: '$40.2M',
                distributeChain: '1002',
                tags: [
                    { label: 'Launchpad / IDO', color: 'blue' },
                    { label: 'Refused Policy', color: 'green' },
                    { label: 'KOL/ Influencer', color: 'yellow' },
                    { label: 'Private & Seed Rounds', color: 'red' },
                ],
            },
        ]
    );

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    return (
        <section className='topcomm-area position-relative'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='d-flex justify-content-center justify-content-md-between align-items-center mb-4 top-title-view'>
                            <h2 className='section-heading'>Top Communities</h2>
                            <Nav variant="tabs" defaultActiveKey={activeTab} className="tabs-bordered">
                                <Nav.Item>
                                    <Nav.Link eventKey="1day" onClick={() => handleTabChange('1day')}>1 day</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="7day" onClick={() => handleTabChange('7day')}>7 days</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="30day" onClick={() => handleTabChange('30day')}>30 days</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Link href={'/communities'} className="viewall-link"><span>See All</span> <i className="fa-regular fa-chevron-right"></i></Link>
                        </div>
                    </Col>
                </Row>
                <Row className='g-3 g-md-4 g-lg-5 row'>
                    {activeTab === '1day' && (
                        <>
                            {communitiesData.map((community) => (
                                <Col className='col-md-6' key={community.id}>
                                    <CommunityCard communityData={community} />
                                </Col>
                            ))}
                        </>
                    )}
                    {activeTab === '7day' && (
                        <>
                            {communitiesData.map((community) => (
                                <Col className='col-md-6' key={community.id}>
                                    <CommunityCard communityData={community} />
                                </Col>
                            ))}
                        </>
                    )}

                    {activeTab === '30day' && (
                        <>
                            {communitiesData.map((community) => (
                                <Col className='col-md-6' key={community.id}>
                                    <CommunityCard communityData={community} />
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

export default TopCommunities;
