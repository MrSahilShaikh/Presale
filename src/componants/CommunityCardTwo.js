import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import supabase from '../config/supabaseClient';

const CommunityCardTwo = ({ communityData }) => {
    const { name, image, authorImage, totalRaised, totalProjects, communityMembers } = communityData;

    // console.log(supabase);
    return (
        <Link href={'/community-details'} className='live-card discover-card white-card'>
            <Image src={image} alt='' className='card-image w-100 img-fluid' width={310} height={173} />
            <div className='card-content'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center icon-title text-black fw-bold'>
                        <Image src={authorImage} className='me-2' width={40} height={40} alt='author' />
                        @{name}
                    </div>
                    <div className='d-flex align-items-center like-btn'>
                        <i className='fa fa-heart liked'></i>
                        34
                    </div>
                </div>

                <p className='content-font mb-3 mt-3 text-start'>Libera is the DEX for RWA and on-chain FX, working...</p>

                <div className='points-list mb-3'>
                    <div className='list'>
                        <p>Total Raised</p>
                        <p>${totalRaised}</p>
                    </div>
                    <div className='list'>
                        <p>Total Projects</p>
                        <p className='d-flex align-items-center'>{totalProjects}</p>
                    </div>
                    <div className='list'>
                        <p>Community Members</p>
                        <p className='d-flex align-items-center'>{communityMembers}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CommunityCardTwo;
