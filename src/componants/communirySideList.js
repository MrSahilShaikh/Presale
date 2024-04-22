import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';

const CommunirySideList = () => {
    const [selectedItem, setSelectedItem] = useState('community 1');
    const [selectedItemImage, setSelectedItemImage] = useState('/img/drop-profile.png');

    const handleSelect = (eventKey, image) => {
        setSelectedItem(eventKey);
        setSelectedItemImage(image)
        console.log(eventKey, image)
    };

    return (
        <>
            <div className="comm-list-box style-2 d-none d-lg-flex">
                <Link href="/project-detail/#" className="plus-button white-style">
                    <i className="fas fa-plus"></i>
                </Link>
                <Link href="/project-detail" className="comm-list">
                    <Image src="/img/BNB.png" width="40" height="40" alt="Name" />
                </Link>
                <Link href="/project-detail" className="comm-list">
                    <Image src="/img/BNB.png" width="40" height="40" alt="Name" />
                </Link>
                <Link href="/project-detail" className="comm-list">
                    <Image src="/img/BNB.png" width="40" height="40" alt="Name" />
                </Link>
                <Link href="/project-detail" className="comm-list">
                    <Image src="/img/BNB.png" width="40" height="40" alt="Name" />
                </Link>
                <Link href="/project-detail" className="comm-list">
                    <Image src="/img/BNB.png" width="40" height="40" alt="Name" />
                </Link>
            </div>
            <Dropdown className="mb-3 d-block d-lg-none">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <Image src={selectedItemImage} width={38} height={38} alt="dropprofile" className="dropprofile me-3" />{selectedItem}
                </Dropdown.Toggle>

                <Dropdown.Menu className="w-100">
                    <Dropdown.Item eventKey="community 1" onClick={() => handleSelect('community 1', '/img/drop-profile.png')}><Image src={'/img/drop-profile.png'} width={38} height={38} alt="dropprofile" className="dropprofile me-3" />community 1 </Dropdown.Item>
                    <Dropdown.Item eventKey="community 2" onClick={() => handleSelect('community 2', '/img/drop-profile.png')}><Image src={'/img/drop-profile.png'} width={38} height={38} alt="dropprofile" className="dropprofile me-3" />community 2</Dropdown.Item>
                    <Dropdown.Item eventKey="community 3" onClick={() => handleSelect('community 3', '/img/drop-profile.png')}><Image src={'/img/drop-profile.png'} width={38} height={38} alt="dropprofile" className="dropprofile me-3" /> community 3</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" ><span className="plus-cir me-3"><i className="fas fa-plus"></i></span>Add New community</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default CommunirySideList;
