import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CommunityDetailsListCard = ({ communityData }) => {
    const { username, avatarSrc, description, likes, totalRaise, contributeChain, distributeChain, tags } = communityData;

    return (
        <Link href={'/community-details'} className='comm-card comm-card-two white-card'>
            <Image src={'/img/card.png'} alt='' className='card-image w-100 img-fluid' width={310} height={173} />
            <div className='tags-list'>
                <span className={`tag yellow`}>KYC</span>
                <span className={`tag green`}><i className='fa fa-verified'></i> Verified</span>
            </div>
            <div className='card-content'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center icon-title'>
                        <Image src={avatarSrc} className='me-2' width={56} height={56} alt='author' />
                        <div>
                            <span>@{username}</span>
                            <p className='content-font mb-0 text-start'>{description}</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center like-btn'>
                        <i className='fa fa-heart liked me-2'></i>
                        {likes}
                    </div>
                </div>

                <div className='points-list mt-4 mb-3'>
                    <div className='list'>
                        <p>Total Raise</p>
                        <p>{totalRaise}</p>
                    </div>
                    <div className='list'>
                        <p>Contribute Chain</p>
                        <p className='d-flex align-items-center'>{contributeChain}</p>
                    </div>
                    <div className='list'>
                        <p>Distribute Chain</p>
                        <p className='d-flex align-items-center'>{distributeChain}</p>
                    </div>
                </div>
                <div className='tags-list larger p-0 noposition'>
                    {tags.map((tag, index) => (
                        <span key={index} className={tag.color}>
                            {tag.label}
                        </span>
                    ))}
                </div>
                <button className='w-100 button-primary mt-3'>View Community</button>
            </div>
        </Link>
    );
};

export default CommunityDetailsListCard;
