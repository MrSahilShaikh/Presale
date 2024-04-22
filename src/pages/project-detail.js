import MainLayout from "@/layouts/main/nav/MainLayout";
import Seo from "@/componants/Seo";
import { useRouter } from "next/router";
import { Button, Col, Container, Dropdown, Form, InputGroup, Modal, Nav, Row } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import LiveDealCard from "@/componants/LiveDealCard";
import Image from "next/image";
import Link from "next/link";
import CountUp from 'react-countup';
import SimpleBarReact from "simplebar-react";
import CommunirySideList from "@/componants/communirySideList";

ProjectDetails.getLayout = (page) => <MainLayout isonlyTop={true}>{page}</MainLayout>;

export default function ProjectDetails() {
    const [show, setShow] = useState(false);
    const [modelStep, setModelStep] = useState(1);
    const [sidebarHeight, setsidebarHeight] = useState(1000);
    const questBarRef = useRef(null);

    useEffect(() => {
        const updateHeight = () => {
            if (window.innerWidth > 991 && questBarRef.current) {
                const questBarHeight = questBarRef.current.clientHeight;
                console.log('height is', questBarHeight);
                setsidebarHeight(questBarHeight);
            } else {
                setsidebarHeight(478); // Set a static height when device width is <= 991px
            }
        };

        updateHeight(); // Initial height update

        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);


    const [activeTab, setActiveTab] = useState('All');

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item === selectedItem ? null : item);
    };
    const handleNextStep = () => {
        setModelStep(modelStep + 1)
    };
    const handleBackStep = () => {
        setModelStep(modelStep - 1)
    };
    const handleClose = () => {
        setShow(false);
        setModelStep(1);
    }
    const handleShow = () => setShow(true);



    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const router = useRouter();

    const metaData = {
        title: 'Communities - Launchpad',
        keywords: 'crypto, Veternary',
        description: 'Communities - Launchpad',
        url: router.asPath,
    };

    return (
        <>
            <Seo {...metaData} />
            <section className='project-detail-area position-relative'>
                <Container>
                    <Row>
                        <Col lg={1} className="custom-col-1">
                            <CommunirySideList />
                        </Col>
                        <Col lg={11} className="custom-col-11">
                            <Row className="g-4 align-items-center">
                                <Col lg={12}>
                                    <div className="d-flex justify-content-between flex-column flex-md-row mb-0 mb-md-0">
                                        <div className="flex-wrapper">
                                            <Image src={'/img/det-pro.png'} alt="image" className="me-3" width={56} height={56} />
                                            <div className="d-flex flex-column title-wrapper">
                                                <div className="d-flex align-items-center">
                                                    <h1 className="mb-0">CZ</h1>
                                                    <div class="tags-list position-static tags-small d-inline-flex">
                                                        <span class="tag yellow">KYC</span>
                                                        <span class="tag green"><i class="fa-solid fa-badge-check me-2"></i>Verified</span>
                                                    </div>
                                                </div>
                                                <p className="mb-0">Ex-Binance CEO Bringing Deals To The People</p>
                                            </div>
                                        </div>
                                        <div className="social-media mt-3 mt-md-0">
                                            <Link href={'/#'}><i className="fab fa-discord"></i></Link>
                                            <Link href={'/#'}><i className="fab fa-telegram"></i></Link>
                                            <Link href={'/#'}>
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.0585 1.25L9.32475 13.6396L0 23.7125H2.09888L10.2626 14.8933L16.8585 23.7125H24L14.2125 10.6265L22.8915 1.25H20.793L13.2746 9.3725L7.2 1.25H0.0585ZM3.14475 2.79575H6.42562L20.9134 22.1671H17.6325L3.14475 2.79575Z" fill="currentcolor" />
                                                </svg>
                                            </Link>
                                            <Link href={'/#'}><i className="fab fa-instagram"></i></Link>
                                            <Link href={'/#'}><i class="fa-regular fa-globe"></i></Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='live-card livethird project-card white-card'>
                                        <div className='card-content pt-4'>
                                            <div className='d-flex justify-content-between align-items-center '>
                                                <div className='d-flex align-items-center icon-title text-black'>
                                                    <Image src={'/img/det-pro.png'} className='me-2 rounded' width={50} height={50} alt='author' />
                                                    <div>
                                                        <h3 className="fw-bold fs-5 mb-1">{'Dirac Finance'}</h3>
                                                        <p className="content-font color-content mb-0">Hello this is a project slogan</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='content-font mb-3 mt-3 text-start'>{'This is the product description, providing more details about the project and what it aims to achieve.'}</p>
                                            <div className='points-list'>
                                                <div className='list'>
                                                    <p>Project Status</p>
                                                    <p className="greentext">{'Live'}</p>
                                                </div>
                                                <div className='list'>
                                                    <p>Fundraising Goal:</p>
                                                    <p>{'$40.2M'}</p>
                                                </div>
                                                <div className='list'>
                                                    <p>Tokens Purchased</p>
                                                    <p>{'60,000 $SOL'}</p>
                                                </div>
                                                <div className='list'>
                                                    <p>Total Raise</p>
                                                    <p className='d-flex align-items-center'>{'$30,000'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="project-timeline-box mb-3">
                                        <h5 className="mb-0">Fundraising Target Guaranteed</h5>
                                        <div className='prog-bar mt-1 text-start'>
                                            <div className='progbar d-flex'>
                                                <div className='progress-container large me-0'>
                                                    <div className='progress-bar' style={{ width: '70%' }}></div>
                                                    <div className='shadow-animated' style={{ width: '70%' }}></div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between prog-content-wrapper">
                                                <span><strong>$15,000</strong> / $30,000</span>
                                                <span>70%</span>
                                            </div>
                                            <button className="w-100 button-primary mt-2" onClick={handleShow}>Invest</button>
                                        </div>
                                    </div>
                                    <div className="project-timeline-box">
                                        <h5 className="mb-0">Fundraising Target FCFS</h5>
                                        <div className='prog-bar mt-1 text-start'>
                                            <div className='progbar d-flex'>
                                                <div className='progress-container large me-0'>
                                                    <div className='progress-bar' style={{ width: '23.76%' }}></div>
                                                    <div className='shadow-animated' style={{ width: '23.76%' }}></div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between prog-content-wrapper">
                                                <span><strong>$15,000</strong> / $30,000</span>
                                                <span>23.76%</span>
                                            </div>
                                            <button className="w-100 button-primary mt-2" onClick={handleShow}>Invest</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8} ref={questBarRef}>
                                    <Image src={'/img/card.png'} alt="image" className="img-fluid  w-100 rounded" width={782} height={469} />
                                    <Nav variant="tabs" defaultActiveKey={activeTab} className="details-tabs mt-4">
                                        <Nav.Item>
                                            <Nav.Link eventKey="All" onClick={() => handleTabChange('All')}>Project Details</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="claimdetail" onClick={() => handleTabChange('claimdetail')}>Claim Details</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <div className="tab-content">
                                        {activeTab === "All" && (
                                            <div className="tab-box content-box">
                                                <SimpleBarReact style={{ height: 600, paddingRight: '15px', marginRight: '-15px' }}>
                                                    <h3>Overview</h3>
                                                    <ul>
                                                        <li><strong>Pitch:</strong> Solstorm</li>
                                                        <li><strong>SOLSTORM:</strong> the ultimate gateway to the Solana ecosystem, offering a first fully automated launchpad for any project and user on Solana.</li>
                                                        <li>Our mission is to support quality, innovative, disruptive Web projects by offering them a quality engaged
                                                            community with native marketing through our 200+ KOL infrastructure. </li>
                                                    </ul>
                                                    <h6>Key COI STOPMS features.</h6>
                                                    <ul>
                                                        <li>The first fully automated Solana launchpad </li>
                                                        <li>Protect liquidity with LP locking/burning</li>
                                                        <li>Exclusive KOL Portal for early access</li>
                                                        <li>On-chain analytics for community engagement</li>
                                                    </ul>
                                                    <h6>$STORM Utility, Fees and Burning:</h6>
                                                    <ul>
                                                        <li>1% transaction fee</li>
                                                        <li>10% revenue buyback</li>
                                                        <li>Token burning mechanism</li>
                                                        <li>KYC & Fees for launchpad creation</li>
                                                        <li>Subscription for Premium launches</li>
                                                        <li>20+ years combined web3 experience</li>
                                                        <li>Top 10 CTF team globally</li>
                                                        <li>Ex IBM, TikTok, Google, Huawei, DAO Maker</li>
                                                    </ul>
                                                    <h6>Token metrics:</h6>
                                                    <ul>
                                                        <li>FDV: $8M</li>
                                                        <li>IMC: $489,2k</li>
                                                        <li>TTS: 10,000,0</li>
                                                    </ul>
                                                </SimpleBarReact>
                                            </div>
                                        )}
                                        {activeTab === "claimdetail" && (
                                            <div className="tab-box">
                                                <SimpleBarReact style={{ height: 600, paddingRight: '15px', marginRight: '-15px' }}>
                                                    <Row className="g-4">
                                                        <Col lg={4}>
                                                            <div className="claim-box">
                                                                <p>Claim Time</p>
                                                                <span>14/03/2024 <br /> 00:00:01</span>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <div className="claim-box">
                                                                <p>Claim Time</p>
                                                                <span className="text-uppercase"><Image src={'/img/ellipse1.png'} alt="polygon" width={24} height={24} /> Polygon</span>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <div className="claim-box">
                                                                <p>Claim Time</p>
                                                                <span>10% TGE rest of 6 months</span>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <div className="claim-box">
                                                                <p>Total Amount Of Tokens</p>
                                                                <span>1,000,000</span>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <div className="claim-box">
                                                                <p>Total Claimed Tokens</p>
                                                                <span>500,000</span>
                                                            </div>
                                                        </Col>
                                                        <Col lg={4}>
                                                            <div className="claim-box">
                                                                <p>Remaining Tokens</p>
                                                                <span>500,000</span>
                                                            </div>
                                                        </Col>
                                                        <Col lg={12}>
                                                            <button className="w-100 button-primary">Claim</button>
                                                        </Col>
                                                    </Row>
                                                </SimpleBarReact>
                                            </div>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="quest-bar">
                                        <h3 className="mb-3">Quests</h3>
                                        <SimpleBarReact style={{ height: sidebarHeight - 75, paddingRight: '15px', marginRight: '-15px' }}>
                                            <Link href={'#'} className="quest-link">
                                                <i>
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24.9998 2.49999C24.9998 2.39999 24.8998 2.29999 24.8998 2.29999C24.7998 2.19999 24.7998 2.19999 24.6998 2.19999C24.3998 2.09999 24.0998 2.19999 23.7998 2.29999C23.7998 2.29999 2.7998 9.89999 1.5998 10.7C1.1998 10.8 1.0998 10.9 0.999801 11C0.799801 11.6 1.3998 11.9 1.3998 11.9L6.7998 13.7H7.0998C8.2998 12.9 19.4998 5.89999 20.0998 5.59999C20.1998 5.59999 20.2998 5.59999 20.2998 5.69999C19.9998 6.59999 10.3998 15.2 10.2998 15.2L10.1998 15.3V15.4L9.6998 20.7C9.6998 20.7 9.4998 22.3 11.0998 20.7C12.2998 19.5 13.3998 18.6 13.9998 18.1C15.8998 19.4 17.8998 20.8 18.6998 21.6C18.7998 21.7 18.9998 21.9 19.1998 21.9C19.3998 22 19.5998 22 19.7998 22C20.0998 22 20.2998 21.9 20.4998 21.7C20.6998 21.5 20.7998 21.3 20.8998 21.1C20.8998 21.1 24.6998 5.69999 24.8998 3.59999V3.09999C24.9998 2.79999 24.9998 2.69999 24.9998 2.49999Z" fill="currentcolor" />
                                                    </svg>
                                                </i>
                                                <div>
                                                    <h5>Follow Project Name</h5>
                                                    <p className="mb-0">Click here to follow Project Name on Twitter for <strong>100 XP</strong></p>
                                                </div>
                                            </Link>
                                            <Link href={'#'} className="quest-link">
                                                <i>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_99_4520)">
                                                            <path d="M0.0585 0.75L9.32475 13.1396L0 23.2125H2.09888L10.2626 14.3933L16.8585 23.2125H24L14.2125 10.1265L22.8915 0.75H20.793L13.2746 8.8725L7.2 0.75H0.0585ZM3.14475 2.29575H6.42562L20.9134 21.6671H17.6325L3.14475 2.29575Z" fill="currentcolor" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_99_4520">
                                                                <rect width="24" height="24" fill="currentcolor" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </i>
                                                <div>
                                                    <h5>Join Project Name</h5>
                                                    <p className="mb-0">Click here to follow Project Name on Twitter for <strong>100 XP</strong></p>
                                                </div>
                                            </Link>
                                            <Link href={'#'} className="quest-link">
                                                <i>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_99_4520)">
                                                            <path d="M0.0585 0.75L9.32475 13.1396L0 23.2125H2.09888L10.2626 14.3933L16.8585 23.2125H24L14.2125 10.1265L22.8915 0.75H20.793L13.2746 8.8725L7.2 0.75H0.0585ZM3.14475 2.29575H6.42562L20.9134 21.6671H17.6325L3.14475 2.29575Z" fill="currentcolor" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_99_4520">
                                                                <rect width="24" height="24" fill="currentcolor" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </i>
                                                <div>
                                                    <h5>Join Project Name</h5>
                                                    <p className="mb-0">Click here to follow Project Name on Twitter for <strong>100 XP</strong></p>
                                                </div>
                                            </Link>
                                            <Link href={'#'} className="quest-link">
                                                <i>
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24.9998 2.49999C24.9998 2.39999 24.8998 2.29999 24.8998 2.29999C24.7998 2.19999 24.7998 2.19999 24.6998 2.19999C24.3998 2.09999 24.0998 2.19999 23.7998 2.29999C23.7998 2.29999 2.7998 9.89999 1.5998 10.7C1.1998 10.8 1.0998 10.9 0.999801 11C0.799801 11.6 1.3998 11.9 1.3998 11.9L6.7998 13.7H7.0998C8.2998 12.9 19.4998 5.89999 20.0998 5.59999C20.1998 5.59999 20.2998 5.59999 20.2998 5.69999C19.9998 6.59999 10.3998 15.2 10.2998 15.2L10.1998 15.3V15.4L9.6998 20.7C9.6998 20.7 9.4998 22.3 11.0998 20.7C12.2998 19.5 13.3998 18.6 13.9998 18.1C15.8998 19.4 17.8998 20.8 18.6998 21.6C18.7998 21.7 18.9998 21.9 19.1998 21.9C19.3998 22 19.5998 22 19.7998 22C20.0998 22 20.2998 21.9 20.4998 21.7C20.6998 21.5 20.7998 21.3 20.8998 21.1C20.8998 21.1 24.6998 5.69999 24.8998 3.59999V3.09999C24.9998 2.79999 24.9998 2.69999 24.9998 2.49999Z" fill="currentcolor" />
                                                    </svg>
                                                </i>
                                                <div>
                                                    <h5>Follow Project Name</h5>
                                                    <p className="mb-0">Click here to follow Project Name on Twitter for <strong>100 XP</strong></p>
                                                </div>
                                            </Link>
                                            <Link href={'#'} className="quest-link">
                                                <i>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_99_4520)">
                                                            <path d="M0.0585 0.75L9.32475 13.1396L0 23.2125H2.09888L10.2626 14.3933L16.8585 23.2125H24L14.2125 10.1265L22.8915 0.75H20.793L13.2746 8.8725L7.2 0.75H0.0585ZM3.14475 2.29575H6.42562L20.9134 21.6671H17.6325L3.14475 2.29575Z" fill="currentcolor" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_99_4520">
                                                                <rect width="24" height="24" fill="currentcolor" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </i>
                                                <div>
                                                    <h5>Join Project Name</h5>
                                                    <p className="mb-0">Click here to follow Project Name on Twitter for <strong>100 XP</strong></p>
                                                </div>
                                            </Link>
                                            <Link href={'#'} className="quest-link">
                                                <i>
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24.9998 2.49999C24.9998 2.39999 24.8998 2.29999 24.8998 2.29999C24.7998 2.19999 24.7998 2.19999 24.6998 2.19999C24.3998 2.09999 24.0998 2.19999 23.7998 2.29999C23.7998 2.29999 2.7998 9.89999 1.5998 10.7C1.1998 10.8 1.0998 10.9 0.999801 11C0.799801 11.6 1.3998 11.9 1.3998 11.9L6.7998 13.7H7.0998C8.2998 12.9 19.4998 5.89999 20.0998 5.59999C20.1998 5.59999 20.2998 5.59999 20.2998 5.69999C19.9998 6.59999 10.3998 15.2 10.2998 15.2L10.1998 15.3V15.4L9.6998 20.7C9.6998 20.7 9.4998 22.3 11.0998 20.7C12.2998 19.5 13.3998 18.6 13.9998 18.1C15.8998 19.4 17.8998 20.8 18.6998 21.6C18.7998 21.7 18.9998 21.9 19.1998 21.9C19.3998 22 19.5998 22 19.7998 22C20.0998 22 20.2998 21.9 20.4998 21.7C20.6998 21.5 20.7998 21.3 20.8998 21.1C20.8998 21.1 24.6998 5.69999 24.8998 3.59999V3.09999C24.9998 2.79999 24.9998 2.69999 24.9998 2.49999Z" fill="currentcolor" />
                                                    </svg>
                                                </i>
                                                <div>
                                                    <h5>Follow Project Name</h5>
                                                    <p className="mb-0">Click here to follow Project Name on Twitter for <strong>100 XP</strong></p>
                                                </div>
                                            </Link>
                                            <Link href={'#'} className="quest-link">
                                                <i>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_99_4520)">
                                                            <path d="M0.0585 0.75L9.32475 13.1396L0 23.2125H2.09888L10.2626 14.3933L16.8585 23.2125H24L14.2125 10.1265L22.8915 0.75H20.793L13.2746 8.8725L7.2 0.75H0.0585ZM3.14475 2.29575H6.42562L20.9134 21.6671H17.6325L3.14475 2.29575Z" fill="currentcolor" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_99_4520">
                                                                <rect width="24" height="24" fill="currentcolor" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </i>
                                                <div>
                                                    <h5>Join Project Name</h5>
                                                    <p className="mb-0">Click here to follow Project Name on Twitter for <strong>100 XP</strong></p>
                                                </div>
                                            </Link>
                                            <Link href={'#'} className="quest-link">
                                                <i>
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M24.9998 2.49999C24.9998 2.39999 24.8998 2.29999 24.8998 2.29999C24.7998 2.19999 24.7998 2.19999 24.6998 2.19999C24.3998 2.09999 24.0998 2.19999 23.7998 2.29999C23.7998 2.29999 2.7998 9.89999 1.5998 10.7C1.1998 10.8 1.0998 10.9 0.999801 11C0.799801 11.6 1.3998 11.9 1.3998 11.9L6.7998 13.7H7.0998C8.2998 12.9 19.4998 5.89999 20.0998 5.59999C20.1998 5.59999 20.2998 5.59999 20.2998 5.69999C19.9998 6.59999 10.3998 15.2 10.2998 15.2L10.1998 15.3V15.4L9.6998 20.7C9.6998 20.7 9.4998 22.3 11.0998 20.7C12.2998 19.5 13.3998 18.6 13.9998 18.1C15.8998 19.4 17.8998 20.8 18.6998 21.6C18.7998 21.7 18.9998 21.9 19.1998 21.9C19.3998 22 19.5998 22 19.7998 22C20.0998 22 20.2998 21.9 20.4998 21.7C20.6998 21.5 20.7998 21.3 20.8998 21.1C20.8998 21.1 24.6998 5.69999 24.8998 3.59999V3.09999C24.9998 2.79999 24.9998 2.69999 24.9998 2.49999Z" fill="currentcolor" />
                                                    </svg>
                                                </i>
                                                <div>
                                                    <h5>Follow Project Name</h5>
                                                    <p className="mb-0">Click here to follow Project Name on Twitter for <strong>100 XP</strong></p>
                                                </div>
                                            </Link>
                                            <Link href={'#'} className="quest-link">
                                                <i>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_99_4520)">
                                                            <path d="M0.0585 0.75L9.32475 13.1396L0 23.2125H2.09888L10.2626 14.3933L16.8585 23.2125H24L14.2125 10.1265L22.8915 0.75H20.793L13.2746 8.8725L7.2 0.75H0.0585ZM3.14475 2.29575H6.42562L20.9134 21.6671H17.6325L3.14475 2.29575Z" fill="currentcolor" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_99_4520">
                                                                <rect width="24" height="24" fill="currentcolor" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </i>
                                                <div>
                                                    <h5>Join Project Name</h5>
                                                    <p className="mb-0">Click here to follow Project Name on Twitter for <strong>100 XP</strong></p>
                                                </div>
                                            </Link>
                                        </SimpleBarReact>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container >
            </section >
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>New Investment</Modal.Title>
                    <span className="step-label">Step {modelStep} of 2</span>
                </Modal.Header>
                <Modal.Body>
                    {modelStep === 1 ? (
                        <>
                            <div className="selection-grid">
                                <button
                                    className={`selection-box ${selectedItem === 'Arcade' ? 'selected' : ''}`}
                                    onClick={() => handleItemClick('Arcade')}
                                >
                                    <span>Project Name</span>
                                    <p>Coin Arcade</p>
                                </button>
                                <button
                                    className={`selection-box ${selectedItem === 'Raised' ? 'selected' : ''}`}
                                    onClick={() => handleItemClick('Raised')}
                                >
                                    <span>Currently Raised</span>
                                    <p>$100,000</p>
                                </button>
                                <button
                                    className={`selection-box ${selectedItem === 'Token' ? 'selected' : ''}`}
                                    onClick={() => handleItemClick('Token')}
                                >
                                    <span>Token Price</span>
                                    <p>$0.05</p>
                                </button>
                                <button
                                    className={`selection-box ${selectedItem === 'Min' ? 'selected' : ''}`}
                                    onClick={() => handleItemClick('Min')}
                                >
                                    <span>Min</span>
                                    <p>$100</p>
                                </button>
                                <button
                                    className={`selection-box ${selectedItem === 'Max' ? 'selected' : ''}`}
                                    onClick={() => handleItemClick('Max')}
                                >
                                    <span>Max</span>
                                    <p>No Max</p>
                                </button>
                                <button
                                    className={`selection-box ${selectedItem === 'Fee' ? 'selected' : ''}`}
                                    onClick={() => handleItemClick('Fee')}
                                >
                                    <span>Fee</span>
                                    <p>10%</p>
                                </button>
                            </div>
                            <InputGroup className="input-bordered mt-4">
                                <InputGroup.Text id="basic-addon1" className="bg-transparent">$</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    placeholder="ParticipateEnter Amount"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <p className="amount-text mb-0">Token Amount: 0</p>
                            <button className="button-primary w-100 mt-3 mb-3" onClick={handleNextStep}>Next Step</button>
                        </>
                    ) : (
                        <>
                            <h3 className="mode-sub-title mb-4 mt-3">{"You're buying 40000.00 tokens in Coin Arcade including fees."}</h3>
                            <ul class="unstyled centered">
                                <li className="mb-3">
                                    <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1" />
                                    <label for="styled-checkbox-1">{"You're buying 40000.00 tokens in Coin Arcade including fees."}</label>
                                </li>
                                <li className="mb-3">
                                    <input class="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value1" />
                                    <label for="styled-checkbox-2">I understand deals are based on trust.</label>
                                </li>
                                <li className="mb-3">
                                    <input class="styled-checkbox" id="styled-checkbox-3" type="checkbox" value="value1" />
                                    <label for="styled-checkbox-3">I have done my own due diligence.</label>
                                </li>
                                <li className="mb-3">
                                    <input class="styled-checkbox" id="styled-checkbox-4" type="checkbox" value="value1" />
                                    <label for="styled-checkbox-4">I understand investing in crypto is high risk and I could lose part or all my funds.</label>
                                </li>
                                <li className="mb-3">
                                    <input class="styled-checkbox" id="styled-checkbox-5" type="checkbox" value="value1" />
                                    <label for="styled-checkbox-5">I am responsible for my own investment, if the project rug pulls (exit scams) | will not receive any funds back.</label>
                                </li>
                            </ul>
                            <button className="button-primary w-100 mt-3 mb-3">Contribute Now</button>
                            <button className="bg-transparent border-0 w-100 mb-3" onClick={handleBackStep}><i className="fas fa-arrow-left me-3"></i> Back</button>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}
