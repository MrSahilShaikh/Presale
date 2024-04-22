import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ data }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Navbar expand="lg" className="bg-transparent header-menu">
            <Container>
                <Link href="/" className="navbar-brand mx-lg-auto d-inline-block d-lg-none">
                    <Image src="/img/logo.png" alt="logo" width={40} height={40} />
                </Link>
                <div className='d-flex justify-content-end'>
                    <Nav.Link href="#" className='wallet-btn me-3 d-inline-block d-lg-none'>Connect Wallet</Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className={`desktopmenu ${isMenuOpen ? 'show' : ''}`}>
                    <Nav className="me-auto main-menus" style={{ width: '30%' }}>
                        <Link className='nav-link' href="/communities">Communities</Link>
                        <Nav.Link href="#deals">Deals</Nav.Link>
                        <Nav.Link href="#resources">Resources</Nav.Link>
                        <Nav.Link href="#socials">Socials</Nav.Link>
                    </Nav>
                    <Link href="/" className="navbar-brand  mx-lg-auto desktoplogo d-none d-lg-inline-block">
                        <Image src="/img/logo.png" alt="logo" width={40} height={40} />
                    </Link>
                    <Nav className="ms-auto justify-content-end d-none d-lg-flex" style={{ width: '30%' }}>
                        <Nav.Link href="#" className='wallet-btn'>Connect Wallet</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
